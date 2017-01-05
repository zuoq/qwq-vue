var base = 'http://localhost/api/qwq';
function generate(path){
    return base+path;
}
module.exports = {
    'base': base,
    'qiushi':generate('/xiaohua/qiushi'),
    'shenhuifu': generate('/xiaohua/shenhuifu'),
    'leng': generate('/xiaohua/leng'),
    'jingdian': generate('/xiaohua/jingdian'),
    'jipin': generate('/xiaohua/jipin'),
    'baoxiao': generate('/xiaohua/baoxiao'),
    'neihan': generate('/xiaohua/neihan'),
    'duanzi': generate('/xiaohua/duanzi'),
    'fuqi': generate('/xiaohua/fuqi'),
    'nannv': generate('/xiaohua/nannv'),
    'youmo': generate('/xiaohua/youmo'),
    'recommend': generate('/recommend'),
    
};