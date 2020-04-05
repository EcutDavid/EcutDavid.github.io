import * as THREE from 'three';

// Why we need filtered logging.
const filterLogging = (undesiredPattern, code) => {
  console.log("foo");
  const originalLog = console.log;
  console.log = function (...args) {
    return originalLog(...args && args.join(' ').match(undesiredPattern) ? [] : args);
  };
  code();
  console.log = originalLog;
};
const namePoints = [[53, 1], [54, 1], [70, 1], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [53, 2], [54, 2], [67, 2], [68, 2], [69, 2], [88, 2], [89, 2], [90, 2], [91, 2], [92, 2], [93, 2], [94, 2], [95, 2], [98, 2], [3, 3], [4, 3], [5, 3], [12, 3], [13, 3], [14, 3], [15, 3], [53, 3], [54, 3], [69, 3], [86, 3], [87, 3], [88, 3], [96, 3], [97, 3], [98, 3], [4, 4], [5, 4], [14, 4], [15, 4], [16, 4], [69, 4], [85, 4], [86, 4], [97, 4], [98, 4], [4, 5], [5, 5], [15, 5], [16, 5], [17, 5], [69, 5], [84, 5], [85, 5], [98, 5], [4, 6], [5, 6], [16, 6], [17, 6], [18, 6], [69, 6], [83, 6], [84, 6], [85, 6], [98, 6], [4, 7], [5, 7], [17, 7], [18, 7], [69, 7], [83, 7], [84, 7], [4, 8], [5, 8], [17, 8], [18, 8], [19, 8], [26, 8], [29, 8], [30, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [46, 8], [47, 8], [48, 8], [54, 8], [63, 8], [64, 8], [65, 8], [66, 8], [67, 8], [68, 8], [69, 8], [82, 8], [83, 8], [84, 8], [103, 8], [104, 8], [105, 8], [106, 8], [111, 8], [112, 8], [113, 8], [114, 8], [121, 8], [122, 8], [125, 8], [126, 8], [134, 8], [138, 8], [139, 8], [140, 8], [141, 8], [4, 9], [5, 9], [17, 9], [18, 9], [19, 9], [24, 9], [25, 9], [30, 9], [31, 9], [37, 9], [38, 9], [39, 9], [47, 9], [51, 9], [52, 9], [53, 9], [54, 9], [62, 9], [68, 9], [69, 9], [82, 9], [83, 9], [84, 9], [105, 9], [106, 9], [113, 9], [114, 9], [120, 9], [126, 9], [127, 9], [132, 9], [133, 9], [134, 9], [135, 9], [137, 9], [140, 9], [141, 9], [142, 9], [4, 10], [5, 10], [18, 10], [19, 10], [24, 10], [25, 10], [31, 10], [38, 10], [39, 10], [53, 10], [54, 10], [61, 10], [69, 10], [82, 10], [83, 10], [84, 10], [105, 10], [106, 10], [113, 10], [114, 10], [120, 10], [126, 10], [127, 10], [133, 10], [134, 10], [135, 10], [141, 10], [142, 10], [4, 11], [5, 11], [18, 11], [19, 11], [24, 11], [25, 11], [31, 11], [38, 11], [39, 11], [46, 11], [53, 11], [54, 11], [60, 11], [61, 11], [69, 11], [82, 11], [83, 11], [84, 11], [95, 11], [96, 11], [97, 11], [98, 11], [99, 11], [100, 11], [105, 11], [106, 11], [113, 11], [114, 11], [120, 11], [127, 11], [134, 11], [141, 11], [142, 11], [4, 12], [5, 12], [18, 12], [19, 12], [31, 12], [39, 12], [40, 12], [53, 12], [54, 12], [60, 12], [69, 12], [82, 12], [83, 12], [84, 12], [97, 12], [98, 12], [99, 12], [105, 12], [106, 12], [113, 12], [114, 12], [127, 12], [134, 12], [141, 12], [142, 12], [4, 13], [5, 13], [18, 13], [19, 13], [29, 13], [30, 13], [31, 13], [39, 13], [40, 13], [53, 13], [54, 13], [60, 13], [69, 13], [82, 13], [83, 13], [84, 13], [97, 13], [98, 13], [105, 13], [106, 13], [113, 13], [114, 13], [125, 13], [126, 13], [127, 13], [134, 13], [141, 13], [142, 13], [4, 14], [5, 14], [17, 14], [18, 14], [19, 14], [27, 14], [31, 14], [40, 14], [41, 14], [45, 14], [53, 14], [54, 14], [59, 14], [60, 14], [69, 14], [82, 14], [83, 14], [84, 14], [97, 14], [98, 14], [105, 14], [106, 14], [113, 14], [114, 14], [122, 14], [123, 14], [127, 14], [134, 14], [141, 14], [142, 14], [4, 15], [5, 15], [17, 15], [18, 15], [19, 15], [25, 15], [31, 15], [40, 15], [41, 15], [53, 15], [54, 15], [59, 15], [60, 15], [69, 15], [82, 15], [83, 15], [84, 15], [97, 15], [98, 15], [105, 15], [106, 15], [113, 15], [114, 15], [121, 15], [127, 15], [134, 15], [141, 15], [142, 15], [4, 16], [5, 16], [17, 16], [18, 16], [24, 16], [31, 16], [41, 16], [44, 16], [53, 16], [54, 16], [59, 16], [60, 16], [69, 16], [83, 16], [84, 16], [85, 16], [97, 16], [98, 16], [105, 16], [106, 16], [113, 16], [114, 16], [120, 16], [127, 16], [134, 16], [141, 16], [142, 16], [4, 17], [5, 17], [16, 17], [17, 17], [18, 17], [23, 17], [24, 17], [31, 17], [41, 17], [42, 17], [43, 17], [53, 17], [54, 17], [60, 17], [61, 17], [69, 17], [83, 17], [84, 17], [85, 17], [97, 17], [98, 17], [105, 17], [106, 17], [113, 17], [114, 17], [119, 17], [120, 17], [127, 17], [134, 17], [141, 17], [142, 17], [4, 18], [5, 18], [15, 18], [16, 18], [17, 18], [23, 18], [24, 18], [31, 18], [41, 18], [42, 18], [43, 18], [53, 18], [54, 18], [60, 18], [61, 18], [69, 18], [84, 18], [85, 18], [86, 18], [97, 18], [98, 18], [105, 18], [106, 18], [113, 18], [114, 18], [119, 18], [120, 18], [126, 18], [127, 18], [134, 18], [141, 18], [142, 18], [3, 19], [4, 19], [5, 19], [14, 19], [15, 19], [16, 19], [23, 19], [24, 19], [25, 19], [30, 19], [31, 19], [42, 19], [43, 19], [53, 19], [54, 19], [60, 19], [61, 19], [62, 19], [68, 19], [69, 19], [70, 19], [85, 19], [86, 19], [87, 19], [97, 19], [98, 19], [105, 19], [106, 19], [112, 19], [113, 19], [114, 19], [119, 19], [120, 19], [121, 19], [126, 19], [127, 19], [134, 19], [141, 19], [142, 19], [3, 20], [4, 20], [5, 20], [11, 20], [12, 20], [13, 20], [14, 20], [24, 20], [25, 20], [26, 20], [27, 20], [28, 20], [31, 20], [32, 20], [33, 20], [34, 20], [42, 20], [53, 20], [54, 20], [61, 20], [62, 20], [63, 20], [64, 20], [67, 20], [68, 20], [70, 20], [71, 20], [86, 20], [87, 20], [88, 20], [89, 20], [96, 20], [97, 20], [98, 20], [106, 20], [107, 20], [108, 20], [109, 20], [110, 20], [113, 20], [114, 20], [115, 20], [119, 20], [120, 20], [121, 20], [122, 20], [123, 20], [124, 20], [126, 20], [127, 20], [128, 20], [129, 20], [133, 20], [134, 20], [135, 20], [141, 20], [142, 20], [1, 21], [2, 21], [3, 21], [4, 21], [5, 21], [6, 21], [7, 21], [8, 21], [9, 21], [25, 21], [26, 21], [31, 21], [32, 21], [51, 21], [52, 21], [53, 21], [54, 21], [55, 21], [56, 21], [63, 21], [64, 21], [65, 21], [89, 21], [90, 21], [91, 21], [92, 21], [93, 21], [94, 21], [95, 21], [107, 21], [108, 21], [109, 21], [113, 21], [120, 21], [121, 21], [122, 21], [127, 21], [128, 21], [132, 21], [133, 21], [134, 21], [135, 21], [136, 21], [140, 21], [141, 21], [142, 21], [143, 21], [144, 21]];
// const posiPoints = [[39, 1], [40, 1], [167, 1], [168, 1], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [37, 2], [40, 2], [41, 2], [42, 2], [117, 2], [118, 2], [119, 2], [120, 2], [121, 2], [122, 2], [123, 2], [124, 2], [125, 2], [126, 2], [127, 2], [128, 2], [129, 2], [130, 2], [131, 2], [167, 2], [168, 2], [3, 3], [4, 3], [11, 3], [12, 3], [36, 3], [41, 3], [42, 3], [119, 3], [120, 3], [130, 3], [131, 3], [167, 3], [168, 3], [3, 4], [12, 4], [36, 4], [119, 4], [120, 4], [131, 4], [3, 5], [36, 5], [119, 5], [120, 5], [131, 5], [3, 6], [4, 6], [35, 6], [36, 6], [45, 6], [119, 6], [120, 6], [3, 7], [4, 7], [13, 7], [35, 7], [36, 7], [44, 7], [45, 7], [119, 7], [120, 7], [3, 8], [4, 8], [5, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [33, 8], [34, 8], [35, 8], [36, 8], [37, 8], [38, 8], [39, 8], [40, 8], [43, 8], [44, 8], [45, 8], [46, 8], [47, 8], [48, 8], [51, 8], [52, 8], [53, 8], [54, 8], [55, 8], [58, 8], [59, 8], [60, 8], [61, 8], [62, 8], [68, 8], [69, 8], [76, 8], [79, 8], [80, 8], [92, 8], [93, 8], [100, 8], [101, 8], [102, 8], [103, 8], [119, 8], [120, 8], [137, 8], [141, 8], [142, 8], [143, 8], [144, 8], [154, 8], [155, 8], [156, 8], [157, 8], [168, 8], [176, 8], [180, 8], [181, 8], [182, 8], [192, 8], [193, 8], [194, 8], [195, 8], [205, 8], [206, 8], [207, 8], [208, 8], [209, 8], [221, 8], [222, 8], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [20, 9], [21, 9], [26, 9], [27, 9], [35, 9], [36, 9], [44, 9], [45, 9], [52, 9], [53, 9], [60, 9], [61, 9], [69, 9], [74, 9], [75, 9], [80, 9], [81, 9], [86, 9], [87, 9], [88, 9], [89, 9], [91, 9], [92, 9], [93, 9], [94, 9], [98, 9], [103, 9], [104, 9], [119, 9], [120, 9], [135, 9], [136, 9], [137, 9], [138, 9], [140, 9], [143, 9], [144, 9], [145, 9], [153, 9], [158, 9], [159, 9], [160, 9], [161, 9], [162, 9], [165, 9], [166, 9], [167, 9], [168, 9], [173, 9], [174, 9], [175, 9], [176, 9], [179, 9], [181, 9], [182, 9], [183, 9], [191, 9], [195, 9], [196, 9], [197, 9], [204, 9], [209, 9], [210, 9], [215, 9], [216, 9], [217, 9], [218, 9], [220, 9], [221, 9], [222, 9], [223, 9], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [19, 10], [20, 10], [27, 10], [28, 10], [35, 10], [36, 10], [44, 10], [45, 10], [53, 10], [60, 10], [61, 10], [74, 10], [75, 10], [81, 10], [87, 10], [89, 10], [90, 10], [93, 10], [97, 10], [104, 10], [105, 10], [119, 10], [120, 10], [121, 10], [128, 10], [129, 10], [137, 10], [138, 10], [139, 10], [144, 10], [145, 10], [152, 10], [158, 10], [159, 10], [160, 10], [167, 10], [168, 10], [175, 10], [176, 10], [177, 10], [183, 10], [184, 10], [190, 10], [196, 10], [197, 10], [198, 10], [203, 10], [210, 10], [211, 10], [216, 10], [218, 10], [219, 10], [222, 10], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [19, 11], [28, 11], [29, 11], [35, 11], [36, 11], [44, 11], [45, 11], [53, 11], [54, 11], [61, 11], [68, 11], [74, 11], [75, 11], [81, 11], [88, 11], [89, 11], [97, 11], [104, 11], [105, 11], [119, 11], [120, 11], [121, 11], [122, 11], [123, 11], [124, 11], [125, 11], [126, 11], [127, 11], [128, 11], [129, 11], [137, 11], [138, 11], [145, 11], [152, 11], [159, 11], [160, 11], [167, 11], [168, 11], [175, 11], [176, 11], [183, 11], [184, 11], [189, 11], [197, 11], [198, 11], [202, 11], [210, 11], [211, 11], [217, 11], [218, 11], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [18, 12], [19, 12], [28, 12], [29, 12], [35, 12], [36, 12], [44, 12], [45, 12], [53, 12], [54, 12], [61, 12], [62, 12], [81, 12], [88, 12], [96, 12], [97, 12], [104, 12], [105, 12], [106, 12], [119, 12], [120, 12], [129, 12], [137, 12], [138, 12], [145, 12], [151, 12], [152, 12], [159, 12], [160, 12], [167, 12], [168, 12], [175, 12], [176, 12], [183, 12], [184, 12], [189, 12], [190, 12], [196, 12], [197, 12], [198, 12], [202, 12], [203, 12], [209, 12], [210, 12], [211, 12], [217, 12], [9, 13], [10, 13], [11, 13], [12, 13], [18, 13], [19, 13], [28, 13], [29, 13], [35, 13], [36, 13], [44, 13], [45, 13], [54, 13], [55, 13], [60, 13], [61, 13], [62, 13], [67, 13], [79, 13], [80, 13], [81, 13], [88, 13], [96, 13], [97, 13], [119, 13], [120, 13], [137, 13], [138, 13], [145, 13], [152, 13], [159, 13], [160, 13], [167, 13], [168, 13], [175, 13], [176, 13], [183, 13], [184, 13], [189, 13], [190, 13], [202, 13], [203, 13], [217, 13], [10, 14], [11, 14], [12, 14], [13, 14], [18, 14], [19, 14], [28, 14], [29, 14], [35, 14], [36, 14], [44, 14], [45, 14], [54, 14], [55, 14], [60, 14], [61, 14], [62, 14], [63, 14], [77, 14], [81, 14], [88, 14], [96, 14], [119, 14], [120, 14], [137, 14], [138, 14], [145, 14], [152, 14], [153, 14], [159, 14], [160, 14], [167, 14], [168, 14], [175, 14], [176, 14], [183, 14], [184, 14], [189, 14], [202, 14], [217, 14], [11, 15], [12, 15], [13, 15], [18, 15], [19, 15], [29, 15], [35, 15], [36, 15], [44, 15], [45, 15], [55, 15], [59, 15], [62, 15], [63, 15], [75, 15], [81, 15], [88, 15], [96, 15], [97, 15], [119, 15], [120, 15], [137, 15], [138, 15], [145, 15], [152, 15], [153, 15], [159, 15], [167, 15], [168, 15], [175, 15], [176, 15], [183, 15], [184, 15], [189, 15], [202, 15], [217, 15], [12, 16], [13, 16], [18, 16], [19, 16], [29, 16], [35, 16], [36, 16], [44, 16], [45, 16], [55, 16], [56, 16], [63, 16], [66, 16], [74, 16], [81, 16], [88, 16], [96, 16], [97, 16], [119, 16], [120, 16], [137, 16], [138, 16], [145, 16], [153, 16], [154, 16], [155, 16], [157, 16], [158, 16], [167, 16], [168, 16], [175, 16], [176, 16], [183, 16], [184, 16], [189, 16], [202, 16], [203, 16], [217, 16], [12, 17], [13, 17], [18, 17], [19, 17], [28, 17], [29, 17], [35, 17], [36, 17], [44, 17], [45, 17], [55, 17], [56, 17], [57, 17], [58, 17], [63, 17], [64, 17], [65, 17], [73, 17], [74, 17], [81, 17], [88, 17], [96, 17], [97, 17], [119, 17], [120, 17], [137, 17], [138, 17], [145, 17], [153, 17], [167, 17], [168, 17], [175, 17], [176, 17], [183, 17], [184, 17], [189, 17], [190, 17], [199, 17], [202, 17], [203, 17], [217, 17], [2, 18], [12, 18], [13, 18], [19, 18], [20, 18], [28, 18], [29, 18], [35, 18], [36, 18], [44, 18], [45, 18], [56, 18], [57, 18], [58, 18], [63, 18], [64, 18], [65, 18], [73, 18], [74, 18], [81, 18], [88, 18], [97, 18], [98, 18], [106, 18], [119, 18], [120, 18], [132, 18], [137, 18], [138, 18], [145, 18], [152, 18], [167, 18], [168, 18], [175, 18], [176, 18], [183, 18], [184, 18], [189, 18], [190, 18], [191, 18], [202, 18], [203, 18], [204, 18], [217, 18], [2, 19], [3, 19], [11, 19], [12, 19], [13, 19], [19, 19], [20, 19], [28, 19], [35, 19], [36, 19], [44, 19], [45, 19], [56, 19], [57, 19], [64, 19], [73, 19], [74, 19], [75, 19], [80, 19], [81, 19], [88, 19], [97, 19], [98, 19], [99, 19], [105, 19], [119, 19], [120, 19], [131, 19], [132, 19], [137, 19], [138, 19], [145, 19], [152, 19], [167, 19], [168, 19], [175, 19], [176, 19], [183, 19], [184, 19], [190, 19], [191, 19], [192, 19], [197, 19], [198, 19], [203, 19], [204, 19], [205, 19], [211, 19], [217, 19], [2, 20], [3, 20], [4, 20], [5, 20], [10, 20], [11, 20], [12, 20], [20, 20], [21, 20], [27, 20], [35, 20], [36, 20], [45, 20], [46, 20], [48, 20], [57, 20], [64, 20], [74, 20], [75, 20], [76, 20], [77, 20], [78, 20], [81, 20], [82, 20], [83, 20], [84, 20], [87, 20], [88, 20], [89, 20], [98, 20], [99, 20], [100, 20], [101, 20], [102, 20], [103, 20], [104, 20], [119, 20], [120, 20], [121, 20], [129, 20], [130, 20], [131, 20], [136, 20], [137, 20], [138, 20], [144, 20], [145, 20], [146, 20], [152, 20], [153, 20], [154, 20], [155, 20], [156, 20], [157, 20], [158, 20], [159, 20], [160, 20], [167, 20], [168, 20], [175, 20], [176, 20], [183, 20], [184, 20], [190, 20], [191, 20], [192, 20], [193, 20], [194, 20], [195, 20], [196, 20], [197, 20], [204, 20], [205, 20], [206, 20], [207, 20], [208, 20], [209, 20], [210, 20], [216, 20], [217, 20], [218, 20], [2, 21], [6, 21], [7, 21], [8, 21], [9, 21], [10, 21], [22, 21], [23, 21], [24, 21], [25, 21], [26, 21], [33, 21], [34, 21], [35, 21], [36, 21], [37, 21], [38, 21], [39, 21], [45, 21], [46, 21], [47, 21], [75, 21], [76, 21], [81, 21], [82, 21], [86, 21], [87, 21], [88, 21], [89, 21], [90, 21], [91, 21], [99, 21], [100, 21], [101, 21], [102, 21], [103, 21], [117, 21], [118, 21], [119, 21], [120, 21], [121, 21], [122, 21], [123, 21], [124, 21], [125, 21], [126, 21], [127, 21], [128, 21], [129, 21], [130, 21], [131, 21], [135, 21], [136, 21], [137, 21], [138, 21], [139, 21], [143, 21], [144, 21], [145, 21], [146, 21], [147, 21], [152, 21], [153, 21], [154, 21], [155, 21], [156, 21], [157, 21], [158, 21], [159, 21], [160, 21], [161, 21], [165, 21], [166, 21], [167, 21], [168, 21], [169, 21], [170, 21], [173, 21], [174, 21], [175, 21], [176, 21], [177, 21], [178, 21], [181, 21], [182, 21], [183, 21], [184, 21], [185, 21], [186, 21], [192, 21], [193, 21], [194, 21], [195, 21], [205, 21], [206, 21], [207, 21], [208, 21], [215, 21], [216, 21], [217, 21], [218, 21], [219, 21], [220, 21], [152, 22], [161, 22], [151, 23], [150, 24], [151, 24], [150, 25], [151, 25], [161, 25], [151, 26], [152, 26], [153, 26], [159, 26], [160, 26], [152, 27], [153, 27], [154, 27], [155, 27], [156, 27], [157, 27]].filter((d, i) => (i % 2 === 0));

function mobilecheck() {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}
const isMobile = mobilecheck();

const maxSpeed = 14;
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x2199e8, side: THREE.DoubleSide });
const planeGeometry = new THREE.PlaneGeometry(1.3, 1.3);
planeGeometry.faces.pop();
class Plane {
  private speedX = 0;
  private speedY = 0;
  private rotateX = 0.02 * Math.random() + 0.005;
  private rotateY = 0.02 * Math.random() + 0.005;
  private mesh: THREE.Mesh;


  constructor(private posX: number, private posY: number, rendererWidth: number) {
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.mesh = plane;

    this.mesh.rotateX(Math.PI * 2 * Math.random());
    this.mesh.rotateY(Math.PI * 2 * Math.random());
    // 400 -> 1.5, 800 -> 1.1
    this.mesh.scale.divideScalar(-0.0007 * rendererWidth + 1.9);

    this.mesh.scale.multiplyScalar(1 + Math.random());

    this.mesh.position.x = (Math.random() - 0.5) * visibleWidth;
    this.mesh.position.y = (Math.random() - 0.5) * visibleHeight;

    scene.add(this.mesh);
  }

  setPos(x: number, y: number) {
    this.mesh.position.x = x;
    this.mesh.position.y = y;
  }

  update(mouseX: number, mouseY: number) {
    const { x, y } = this.mesh.position;
    this.speedX = (this.posX - x) / visibleWidth * maxSpeed;
    this.speedX = Math.min(this.speedX, maxSpeed);
    this.speedY = (this.posY - y) / visibleHeight * maxSpeed;
    this.speedY = Math.min(this.speedY, maxSpeed);

    if (!isMobile) {
      const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
      if (distance < 20) {
        const accX = (mouseX - x) / 3;
        this.speedX -= accX;

        const accY = (mouseY - y) / 3;
        this.speedY -= accY;
      }
    }

    this.mesh.position.x += this.speedX;
    this.mesh.rotateX(this.rotateX);
    this.mesh.rotateY(this.rotateY);
    this.mesh.position.y += this.speedY;
  }

  destroy() {
    scene.remove(this.mesh);
  }
}

let planes: Plane[] = [];

const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0xFFFFFF));
const light = new THREE.DirectionalLight(0xffffff, .5);
light.position.set(200, 200, 5);
scene.add(light);
const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.9);
scene.add(hemisphereLight);

let renderer: THREE.WebGLRenderer;
filterLogging(/^THREE\.WebGLRenderer\s*\d*$/, () => {
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
});

document.addEventListener('mousemove', onDocumentMouseMove);
let rayX = 99999;
let rayY = 99999;
function onDocumentMouseMove(evt: MouseEvent) {
  const yInc = window.scrollY ? window.scrollY : 0;
  rayX = (evt.clientX - renderer.domElement.offsetLeft) * displayRatio - visibleWidth / 2;
  rayY = -((evt.clientY + yInc - renderer.domElement.offsetTop) * displayRatio - visibleHeight / 2);
}

const drawText = (points: number[][], left: number, right: number, top: number) => {
  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = Number.MIN_VALUE;
  let maxY = Number.MIN_VALUE;

  const process = (x: number, y: number) => {
    const plane = new Plane(x, y, renderWidth);
    planes.push(plane);
  };

  points.forEach(d => {
    if (d[0] < minX) minX = d[0];
    if (d[1] < minY) minY = d[1];
    if (d[0] > maxX) maxX = d[0];
    if (d[1] > maxY) maxY = d[1];
  });
  const scale = (right - left) / (maxX - minX);
  let pointer = 0;
  const renderPoints = () => {
    const boundary = Math.min(pointer + 100, points.length);
    for (; pointer < boundary; pointer++) {
      const [x, y] = points[pointer];
      process(left + x * scale, top - y * scale);
    }
    if(pointer < points.length) {
      setTimeout(renderPoints, 0);
    }
  }
  renderPoints();
};

const distanceFromCamera = 100;
let renderWidth = window.innerWidth;
let renderHeight = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);
camera.position.z = distanceFromCamera;
let visibleHeight = 2 * Math.tan((Math.PI / 180) * camera.fov / 2) * distanceFromCamera;
let visibleWidth = visibleHeight * renderWidth / renderHeight;
let displayRatio = visibleHeight / renderHeight;

let onReset = false;
function getRendererWidth() {
  const width = (document.querySelector(targetSelector) as HTMLElement).offsetWidth;
  return Math.min(1200, width);
}

function rebuildParticles() {
  onReset = true;
  renderWidth = getRendererWidth();
  renderHeight = (document.querySelector(targetSelector) as HTMLElement).offsetHeight;
  renderer.setSize(renderWidth, renderHeight);
  camera.aspect = renderWidth / renderHeight;
  camera.updateProjectionMatrix();

  visibleHeight = 2 * Math.tan((Math.PI / 180) * camera.fov / 2) * distanceFromCamera;
  visibleWidth = visibleHeight * renderWidth / renderHeight;
  displayRatio = visibleHeight / renderHeight;

  if (planes.length) {
    planes.forEach(d => d.destroy());
    planes = [];
  }
  drawText(namePoints, -visibleWidth / 2.6, visibleWidth / 2.6, visibleHeight / 2 - 50);
  onReset = false;
}

let isOnDebounce = false;
function reset() {
  if (!isOnDebounce) {
    isOnDebounce = true;

    setTimeout(() => {
      isOnDebounce = false;
      if (getRendererWidth() === renderWidth) return;
      rebuildParticles();
    }, 1500);
  }
}

function renderingLoop() {
  if (!onReset) {
    renderer.render(scene, camera);
    planes.forEach(d => d.update(rayX, rayY));
  }
  requestAnimationFrame(renderingLoop);
}

let targetSelector;
export default function render(selector) {
  targetSelector = selector;
  window.addEventListener('resize', reset);
  document.querySelector(selector).appendChild(renderer.domElement);
  rebuildParticles();
  renderingLoop();
}
