import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-white border-t mt-20">
      {/* 主要內容 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 安全保證 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">安全保證</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-shield-alt text-blue-500 mr-2" />
                SSL 安全加密
              </li>
              <li className="flex items-center">
                <i className="fas fa-lock text-blue-500 mr-2" />
                支付安全保護
              </li>
              <li className="flex items-center">
                <i className="fas fa-user-shield text-blue-500 mr-2" />
                隱私權保護
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-blue-500 mr-2" />
                正品保證
              </li>
            </ul>
          </div>

          {/* 支付方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">支付方式</h3>
            <div className="grid grid-cols-3 gap-4">
              <i className="fab fa-cc-visa text-2xl text-gray-400" />
              <i className="fab fa-cc-mastercard text-2xl text-gray-400" />
              <i className="fab fa-cc-jcb text-2xl text-gray-400" />
              <i className="fab fa-cc-amex text-2xl text-gray-400" />
              <i className="fab fa-apple-pay text-2xl text-gray-400" />
              <i className="fab fa-google-pay text-2xl text-gray-400" />
            </div>
          </div>

          {/* 服務支援 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服務支援</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-headset text-blue-500 mr-2" />
                24/7 客服支援
              </li>
              <li className="flex items-center">
                <i className="fas fa-truck text-blue-500 mr-2" />
                全球配送
              </li>
              <li className="flex items-center">
                <i className="fas fa-undo text-blue-500 mr-2" />
                7天鑑賞期
              </li>
              <li className="flex items-center">
                <i className="fas fa-comments text-blue-500 mr-2" />
                線上諮詢
              </li>
            </ul>
          </div>

          {/* 認證標誌 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">安全認證</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-certificate text-blue-500" />
                <span className="text-sm text-gray-600">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-award text-blue-500" />
                <span className="text-sm text-gray-600">PCI DSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-blue-500" />
                <span className="text-sm text-gray-600">SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-blue-500" />
                <span className="text-sm text-gray-600">GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部資訊 */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版權信息 */}
            <div className="text-sm text-gray-500">
              © 2024 智慧手錶. All rights reserved.
            </div>
           

            {/* 社群媒體 */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-facebook text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-instagram text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-twitter text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-youtube text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
