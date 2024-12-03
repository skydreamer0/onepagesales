import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { ViteDevServer, Connect } from 'vite'
import express from 'express'
import cors from 'cors'
import { format } from 'date-fns'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/onepagesales/',
  plugins: [
    react(),
    {
      name: 'configure-server',
      configureServer(server: ViteDevServer) {
        server.middlewares.use(cors())
        server.middlewares.use(express.json())
        
        // 處理支付請求
        const createPaymentHandler: Connect.NextHandleFunction = (req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/create-payment') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });

            req.on('end', () => {
              try {
                const { items, paymentMethod, totalAmount } = JSON.parse(body);

                // 這裡先模擬支付流程
                console.log('建立支付請求:', {
                  items,
                  paymentMethod,
                  totalAmount,
                  timestamp: format(new Date(), 'yyyy/MM/dd HH:mm:ss')
                });

                // 在實際場景中，這裡會調用綠界 API
                // 現在先重定向到模擬的成功頁面
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  message: '支付請求已建立',
                  // 實際場景中，這裡會是綠界的支付頁面 URL
                  paymentUrl: '/payment-simulation.html'
                }));
              } catch (error) {
                console.error('支付請求處理錯誤:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: '支付請求處理失敗' }));
              }
            });

            req.on('error', () => {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: '支付請求處理失敗' }));
            });
          } else {
            next();
          }
        };

        server.middlewares.use(createPaymentHandler);

        // 處理支付回調
        const handlePaymentCallback: Connect.NextHandleFunction = (req, res, next) => {
          if (req.url === '/api/payment/callback' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const { orderNo, status } = data;
                
                if (status === 'success' && orderNo) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ 
                    success: true,
                    message: `訂單 ${orderNo} 支付成功`
                  }));
                } else {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ 
                    error: 'Invalid payment data',
                    message: '支付資料無效'
                  }));
                }
              } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({ 
                  error: 'Invalid JSON',
                  message: '無效的 JSON 格式'
                }));
              }
            });

            req.on('error', () => {
              res.statusCode = 500;
              res.end(JSON.stringify({ 
                error: 'Internal server error',
                message: '伺服器內部錯誤'
              }));
            });
          } else {
            next();
          }
        };

        server.middlewares.use(handlePaymentCallback);
      },
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
