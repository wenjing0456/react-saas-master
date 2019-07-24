/**
  * 返回数组中的最小值/最大值
  * arrayMin([10, 1, 5])
  * arrayMax([10, 1, 5])
 */
const arrayMin = arr => Math.min(...arr);

const arrayMax = arr => Math.max(...arr);





const Filter = {
  arrayMin: arrayMin,
  arrayMax: arrayMax,
  // go: browserHistory.go,
  // goBack: goBack,
  // goForward: browserHistory.goForward,
  // resolveAction: resolveAction,
  // init: init,
  // resolvePageName: resolvePageName
};
export default Filter;

