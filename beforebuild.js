const axios = require('axios');
const path = require('path');
const fs = require('fs');

const docsList = [
  {
    key: 'query',
    name: '生活缴费接入协议及流程',
  },
  {
    key: 'withholding',
    name: '微信生活缴费代扣功能前端接入协议',
  },
  {
    key: 'withholding_api',
    name: '微信生活缴费代扣接口API文档',
  },
  {
    key: 'open_mch',
    name: '微信生活缴费小程序跳转说明',
  },
  {
    key: 'open_wx',
    name: '微信生活缴费小程序跳转说明（内部文档）',
  },
];

const encodeURIList = docsList.map(item => {
  return {
    key: item.key,
    name: encodeURIComponent(item.name),
  };
});

(async () => {
  try {
    encodeURIList.forEach(async item => {
      const response = await axios({
        method: 'GET',
        url: `https://cdn-go.woa.com/mmpay_life_pay/mmpaylivepayment/latest/${item.name}.md`,
        responseType: 'stream',
      });
      const indexPath = path.resolve(__dirname, './src/assets', `${decodeURIComponent(item.key)}.md`);
      response.data.pipe(fs.createWriteStream(indexPath));
    });
  } catch (e) {
    console.log('========',e)
    throw new Error(e);
  }
})();
