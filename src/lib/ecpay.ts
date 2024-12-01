import crypto from "crypto";

// 這些值需要從綠界後台取得
const MERCHANT_ID = process.env.ECPAY_MERCHANT_ID;
const HASH_KEY = process.env.ECPAY_HASH_KEY;
const HASH_IV = process.env.ECPAY_HASH_IV;

// 測試環境網址
const TEST_PAYMENT_URL = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";
// 正式環境網址
const PROD_PAYMENT_URL = "https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5";

const PAYMENT_URL = process.env.NODE_ENV === "production" 
  ? PROD_PAYMENT_URL 
  : TEST_PAYMENT_URL;

type CreatePaymentParams = {
  MerchantTradeNo: string;
  MerchantTradeDate: string;
  TotalAmount: number;
  TradeDesc: string;
  ItemName: string;
  ReturnURL: string;
  ClientBackURL: string;
  PaymentType?: "Credit" | "ATM" | "CVS";
};

// 產生檢查碼
function generateCheckMacValue(params: Record<string, string | number>) {
  // 依照綠界規範進行參數排序和編碼
  const sortedParams = Object.entries(params)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const hashStr = `HashKey=${HASH_KEY}&${sortedParams}&HashIV=${HASH_IV}`;
  const encodedStr = encodeURIComponent(hashStr).toLowerCase();
  
  // 使用 SHA256 產生檢查碼
  return crypto.createHash("sha256")
    .update(encodedStr)
    .digest("hex")
    .toUpperCase();
}

// 建立綠界付款請求
export async function createPayment(params: CreatePaymentParams) {
  const paymentParams = {
    MerchantID: String(MERCHANT_ID), // 修復 MerchantID 類型錯誤
    MerchantTradeNo: params.MerchantTradeNo,
    MerchantTradeDate: params.MerchantTradeDate,
    PaymentType: "aio",
    TotalAmount: params.TotalAmount,
    TradeDesc: params.TradeDesc,
    ItemName: params.ItemName,
    ReturnURL: params.ReturnURL,
    ClientBackURL: params.ClientBackURL,
    // 指定付款方式
    ChoosePayment: params.PaymentType || "Credit",
    EncryptType: 1,
  };

  // 產生檢查碼
  const CheckMacValue = generateCheckMacValue(paymentParams);

  // 回傳完整的付款參數
  return {
    paymentUrl: PAYMENT_URL,
    params: {
      ...paymentParams,
      CheckMacValue,
    },
  };
}
