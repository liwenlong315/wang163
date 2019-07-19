import Mock from 'mockjs'
import msite from './msite'
import classify from './category'

// 暴露接口: /msite
Mock.mock('/msite', {code: 0, msite: msite.kingKongModule});
Mock.mock('/classify', {code: 0, category: classify});


console.log('执行了mockServer');
