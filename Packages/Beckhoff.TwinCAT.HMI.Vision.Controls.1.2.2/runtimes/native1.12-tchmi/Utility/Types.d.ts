declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Types {
                    type Array2<T = number> = [T, T];
                    type Array3<T = number> = [T, T, T];
                    type Array4<T = number> = [T, T, T, T];
                    type Array7<T = number> = [T, T, T, T, T, T, T];
                    type Array8<T = number> = [T, T, T, T, T, T, T, T];
                    type BIT = boolean;
                    type BOOL = boolean;
                    type BYTE = number;
                    type SINT = number;
                    type INT = number;
                    type DINT = number;
                    type LINT = string | number;
                    type USINT = number;
                    type UINT = number;
                    type UDINT = number;
                    type ULINT = string | number;
                    type REAL = number;
                    type LREAL = number;
                    type STRING = string;
                    type PVOID = UDINT;
                    type ITcVnDisplayableImage = string;
                    type TcVnPoint = TcVnPoint2_DINT;
                    type TcVnPoint2_DINT = TcVnVector2_DINT;
                    type TcVnPoint2_LREAL = TcVnVector2_LREAL;
                    type TcVnPoint2_REAL = TcVnVector2_REAL;
                    type TcVnPoint3_LREAL = TcVnVector3_LREAL;
                    type TcVnPoint3_REAL = TcVnVector3_REAL;
                    type TcVnRectangle = TcVnRectangle_DINT;
                    type TcVnArray3_Point2_REAL = Array3<TcVnPoint2_REAL>;
                    type TcVnArray4_LREAL = Array3<LREAL>;
                    type TcVnArray4_Point2_REAL = Array4<TcVnPoint2_REAL>;
                    type TcVnArray7_LREAL = Array7<LREAL>;
                    type TcVnArray8_LREAL = Array8<LREAL>;
                    type TcVnMatrix2x3_LREAL = Array2<Array3<number>>;
                    type TcVnMatrix3x3_LREAL = Array3<Array3<number>>;
                    type TcVnVector2_DINT = Array2<DINT>;
                    type TcVnVector2_LREAL = Array2<LREAL>;
                    type TcVnVector2_REAL = Array2<REAL>;
                    type TcVnVector3_LREAL = Array3<LREAL>;
                    type TcVnVector3_REAL = Array3<REAL>;
                    type TcVnVector4_DINT = Array4<DINT>;
                    type TcVnVector4_LREAL = Array4<LREAL>;
                    enum ETcVn2dCodeSearchStrategy {
                        TCVN_CSS_DEFAULT = 1,
                        TCVN_CSS_ONLY_NOT_INVERTED = 8,
                        TCVN_CSS_FIRST_NOT_INVERTED = 10,
                        TCVN_CSS_ONLY_INVERTED = 12,
                        TCVN_CSS_FIRST_INVERTED = 14,
                        TCVN_CSS_ONLY_NOT_FLIPPED = 64,
                        TCVN_CSS_FIRST_NOT_FLIPPED = 80,
                        TCVN_CSS_ONLY_FLIPPED = 96,
                        TCVN_CSS_FIRST_FLIPPED = 112
                    }
                    enum ETcVnAdaptiveThresholdMethod {
                        TCVN_ATM_MEAN = 0,
                        TCVN_ATM_GAUSSIAN = 1
                    }
                    enum ETcVnBarcodeSearchDirection {
                        TCVN_BSD_ANY = 0,
                        TCVN_BSD_HORIZONTAL = 1,
                        TCVN_BSD_VERTICAL = 2
                    }
                    enum ETcVnBarcodeType {
                        TCVN_BT_CODABAR = 4,
                        TCVN_BT_CODE39 = 8,
                        TCVN_BT_CODE93 = 16,
                        TCVN_BT_CODE128 = 32,
                        TCVN_BT_EAN8 = 128,
                        TCVN_BT_EAN13 = 256,
                        TCVN_BT_ITF = 512,
                        TCVN_BT_UPCA = 32768,
                        TCVN_BT_UPCE = 65536,
                        TCVN_BT_ANY = 99260,
                        TCVN_BT_CODE39EXTENDED = 262144
                    }
                    enum ETcVnBlobCombination {
                        TCVN_BC_SMALLEST = 0,
                        TCVN_BC_LARGEST = 1,
                        TCVN_BC_MIN_THRESHOLD = 2,
                        TCVN_BC_MAX_THRESHOLD = 3,
                        TCVN_BC_MEDIAN_THRESHOLD = 4
                    }
                    enum ETcVnBorderInterpolationMethod {
                        TCVN_BIM_CONSTANT = 0,
                        TCVN_BIM_REPLICATE = 1,
                        TCVN_BIM_REFLECT = 2,
                        TCVN_BIM_WRAP = 3,
                        TCVN_BIM_REFLECT_101 = 4,
                        TCVN_BIM_DEFAULT = 4,
                        TCVN_BIM_TRANSPARENT = 5,
                        TCVN_BIM_ISOLATED_CONSTANT = 16,
                        TCVN_BIM_ISOLATED_REPLICATE = 17,
                        TCVN_BIM_ISOLATED_REFLECT = 18,
                        TCVN_BIM_ISOLATED_WRAP = 19,
                        TCVN_BIM_ISOLATED_REFLECT_101 = 20
                    }
                    enum ETcVnCameraState {
                        TCVN_CS_ERROR = -1,
                        TCVN_CS_INITIAL = 0,
                        TCVN_CS_INITIALIZING = 1,
                        TCVN_CS_INITIALIZED = 2,
                        TCVN_CS_OPENING = 3,
                        TCVN_CS_OPENED = 4,
                        TCVN_CS_STARTACQUISITION = 5,
                        TCVN_CS_ACQUIRING = 6,
                        TCVN_CS_STOPACQUISITION = 7,
                        TCVN_CS_RESETTINGFEATURES = 8,
                        TCVN_CS_TRIGGERING = 9,
                        TCVN_CS_CLOSING = 10
                    }
                    enum ETcVnColorMap {
                        TCVN_CM_AUTUMN = 0,
                        TCVN_CM_BONE = 1,
                        TCVN_CM_JET = 2,
                        TCVN_CM_WINTER = 3,
                        TCVN_CM_RAINBOW = 4,
                        TCVN_CM_OCEAN = 5,
                        TCVN_CM_SUMMER = 6,
                        TCVN_CM_SPRING = 7,
                        TCVN_CM_COOL = 8,
                        TCVN_CM_HSV = 9,
                        TCVN_CM_HOT = 11
                    }
                    enum ETcVnColorMapSize {
                        TCVN_CMS_256 = 256,
                        TCVN_CMS_65536 = 65536
                    }
                    enum ETcVnColorTrainingMethod {
                        TCVN_CTM_LAB = 0,
                        TCVN_CTM_RGB = 1
                    }
                    enum ETcVnContainerExportFormat {
                        TCVN_CEF_XML = 0,
                        TCVN_CEF_XML_SERIALIZED = 1
                    }
                    enum ETcVnContourApproximationMethod {
                        TCVN_CAM_NONE = 1,
                        TCVN_CAM_SIMPLE = 2,
                        TCVN_CAM_TC89_L1 = 3,
                        TCVN_CAM_TC89_KCOS = 4
                    }
                    enum ETcVnContourRetrievalMode {
                        TCVN_CRM_EXTERNAL = 0,
                        TCVN_CRM_LIST = 1,
                        TCVN_CRM_CONNECTED_COMPONENTS = 2,
                        TCVN_CRM_TREE = 3,
                        TCVN_CRM_FLOODFILL = 4
                    }
                    enum ETcVnContoursMatchComparisonMethod {
                        TCVN_CMCM_CONTOURS_MATCH_I1 = 1,
                        TCVN_CMCM_CONTOURS_MATCH_I2 = 2,
                        TCVN_CMCM_CONTOURS_MATCH_I3 = 3
                    }
                    enum ETcVnDiffusivityTypeKAZE {
                        TCVN_DT1_KAZE_PM_G1 = 0,
                        TCVN_DT1_KAZE_PM_G2 = 1,
                        TCVN_DT1_KAZE_WEICKERT = 2,
                        TCVN_DT1_KAZE_CHARBONNIER = 3
                    }
                    enum ETcVnDistanceTransformationLabel {
                        TCVN_DTL_CCOMP = 0,
                        TCVN_DTL_PIXEL = 1
                    }
                    enum ETcVnDistanceTransformationMask {
                        TCVN_DTM_PRECISE = 0,
                        TCVN_DTM_3 = 3,
                        TCVN_DTM_5 = 5
                    }
                    enum ETcVnDistanceType {
                        TCVN_DT_USER = -1,
                        TCVN_DT_L1 = 1,
                        TCVN_DT_L2 = 2,
                        TCVN_DT_C = 3,
                        TCVN_DT_L12 = 4,
                        TCVN_DT_FAIR = 5,
                        TCVN_DT_WELSCH = 6,
                        TCVN_DT_HUBER = 7
                    }
                    enum ETcVnDrawMatchesFlags {
                        TCVN_DMF_DEFAULT = 0,
                        TCVN_DMF_OVERDRAW = 1,
                        TCVN_DMF_SKIPSINGLE = 2,
                        TCVN_DMF_OVERDRAW_SKIPSINGLE = 3,
                        TCVN_DMF_RICHKEYPOINT = 4,
                        TCVN_DMF_OVERDRAW_RICHKEYPOINT = 5,
                        TCVN_DMF_SKIPSINGLE_RICHKEYPOINT = 6,
                        TCVN_DMF_OVERDRAW_SKIPSINGLE_RICHKEYPOINT = 7
                    }
                    enum ETcVnDrawShape {
                        TCVN_DS_RANDOM = -1,
                        TCVN_DS_CIRCLE = 0,
                        TCVN_DS_SQUARE = 1,
                        TCVN_DS_PLUS = 2,
                        TCVN_DS_X = 3,
                        TCVN_DS_DIAMOND = 4,
                        TCVN_DS_MAX = 5
                    }
                    enum ETcVnEdgeDetectionAlgorithm {
                        TCVN_EDA_INTERPOLATION = 0,
                        TCVN_EDA_APPROX_ERF = 1,
                        TCVN_EDA_APPROX_GAUSSIAN = 2
                    }
                    enum ETcVnEdgeDirection {
                        TCVN_ED_DARK_TO_LIGHT = 0,
                        TCVN_ED_LIGHT_TO_DARK = 1
                    }
                    enum ETcVnElementType {
                        TCVN_ET_SAME_AS_SOURCE = -1,
                        TCVN_ET_USINT = 0,
                        TCVN_ET_SINT = 1,
                        TCVN_ET_UINT = 2,
                        TCVN_ET_INT = 3,
                        TCVN_ET_DINT = 4,
                        TCVN_ET_REAL = 5,
                        TCVN_ET_LREAL = 6
                    }
                    enum ETcVnEstimationAlgorithm {
                        TCVN_EA_DEFAULT = 0,
                        TCVN_EA_LMEDS = 4,
                        TCVN_EA_RANSAC = 8,
                        TCVN_EA_RHO = 16
                    }
                    enum ETcVnExtremePointDirection {
                        TCVN_EPD_TOP_LEFT = 0,
                        TCVN_EPD_TOP_MEDIAN = 1,
                        TCVN_EPD_TOP_RIGHT = 2,
                        TCVN_EPD_BOTTOM_LEFT = 3,
                        TCVN_EPD_BOTTOM_MEDIAN = 4,
                        TCVN_EPD_BOTTOM_RIGHT = 5,
                        TCVN_EPD_LEFT_TOP = 6,
                        TCVN_EPD_LEFT_MEDIAN = 7,
                        TCVN_EPD_LEFT_BOTTOM = 8,
                        TCVN_EPD_RIGHT_TOP = 9,
                        TCVN_EPD_RIGHT_MEDIAN = 10,
                        TCVN_EPD_RIGHT_BOTTOM = 11
                    }
                    enum ETcVnFeatureDescriptorTypeAKAZE {
                        TCVN_FDT_AKAZE_KAZE_UPRIGHT = 2,
                        TCVN_FDT_AKAZE_KAZE = 3,
                        TCVN_FDT_AKAZE_MLDB_UPRIGHT = 4,
                        TCVN_FDT_AKAZE_MLDB = 5
                    }
                    enum ETcVnFeatureScoreTypeORB {
                        TCVN_FST_ORB_HARRIS = 0,
                        TCVN_FST_ORB_FAST = 1
                    }
                    enum ETcVnFilterDirection {
                        TCVN_FD_X = 0,
                        TCVN_FD_Y = 1
                    }
                    enum ETcVnFlipAxis {
                        TCVN_FA_XY = -1,
                        TCVN_FA_X = 0,
                        TCVN_FA_Y = 1
                    }
                    enum ETcVnFontType {
                        TCVN_FT_HERSHEY_SIMPLEX = 0,
                        TCVN_FT_HERSHEY_PLAIN = 1,
                        TCVN_FT_HERSHEY_DUPLEX = 2,
                        TCVN_FT_HERSHEY_COMPLEX = 3,
                        TCVN_FT_HERSHEY_TRIPLEX = 4,
                        TCVN_FT_HERSHEY_COMPLEX_SMALL = 5,
                        TCVN_FT_HERSHEY_SCRIPT_SIMPLEX = 6,
                        TCVN_FT_HERSHEY_SCRIPT_COMPLEX = 7,
                        TCVN_FT_HERSHEY_PLAIN_ITALIC = 17,
                        TCVN_FT_HERSHEY_COMPLEX_ITALIC = 19,
                        TCVN_FT_HERSHEY_TRIPLEX_ITALIC = 20,
                        TCVN_FT_HERSHEY_COMPLEX_SMALL_ITALIC = 21
                    }
                    enum ETcVnHoughMethod {
                        TCVN_HM_STANDARD = 0,
                        TCVN_HM_PROBABILISTIC = 1,
                        TCVN_HM_MULTI_SCALE = 2,
                        TCVN_HM_GRADIENT = 3
                    }
                    enum ETcVnInterpolationType {
                        TCVN_IT_NEAREST_NEIGHBOR = 0,
                        TCVN_IT_BILINEAR = 1,
                        TCVN_IT_BICUBIC = 2,
                        TCVN_IT_AREA_BASED = 3,
                        TCVN_IT_LANCZOS4 = 4
                    }
                    enum ETcVnKeypointDetectionTypeAGAST {
                        TCVN_KDT_AGAST_5_8 = 0,
                        TCVN_KDT_AGAST_7_12d = 1,
                        TCVN_KDT_AGAST_7_12s = 2,
                        TCVN_KDT_AGAST_9_16 = 3
                    }
                    enum ETcVnKeypointDetectionTypeFAST {
                        TCVN_KDT_FAST_5_8 = 0,
                        TCVN_KDT_FAST_7_12 = 1,
                        TCVN_KDT_FAST_9_16 = 2
                    }
                    enum ETcVnLineType {
                        TCVN_LT_4_CONNECTED = 4,
                        TCVN_LT_8_CONNECTED = 8,
                        TCVN_LT_ANTIALIASED = 16
                    }
                    enum ETcVnMorphologicalOperator {
                        TCVN_MO_EROSION = 0,
                        TCVN_MO_DILATION = 1,
                        TCVN_MO_OPENING = 2,
                        TCVN_MO_CLOSING = 3,
                        TCVN_MO_GRADIENT = 4,
                        TCVN_MO_WHITE_TOPHAT = 5,
                        TCVN_MO_BLACK_TOPHAT = 6,
                        TCVN_MO_OPENING_BY_RECONSTRUCTION = 1073741826,
                        TCVN_MO_CLOSING_BY_RECONSTRUCTION = 1073741827,
                        TCVN_MO_WHITE_TOPHAT_BY_RECONSTRUCTION = 1073741829,
                        TCVN_MO_BLACK_TOPHAT_BY_RECONSTRUCTION = 1073741830
                    }
                    enum ETcVnNormalizationType {
                        TCVN_NT_INF = 1,
                        TCVN_NT_L1 = 2,
                        TCVN_NT_L2 = 4,
                        TCVN_NT_L2SQR = 5,
                        TCVN_NT_HAMMING = 6,
                        TCVN_NT_HAMMING2 = 7,
                        TCVN_NT_RELATIVE_INF = 9,
                        TCVN_NT_RELATIVE_L1 = 10,
                        TCVN_NT_RELATIVE_L2 = 12,
                        TCVN_NT_RELATIVE_L2SQR = 13,
                        TCVN_NT_RELATIVE_HAMMING = 14,
                        TCVN_NT_RELATIVE_HAMMING2 = 15,
                        TCVN_NT_MINMAX = 32
                    }
                    enum ETcVnPixelEncoding {
                        TCVN_PE_NONE = 0,
                        TCVN_PE_BAYER_GR = 1,
                        TCVN_PE_BAYER_RG = 2,
                        TCVN_PE_BAYER_GB = 3,
                        TCVN_PE_BAYER_BG = 4,
                        TCVN_PE_YUV_411_UYYVYY = 5,
                        TCVN_PE_YUV_422_UYVY = 6,
                        TCVN_PE_YUV_422_YUYV = 7,
                        TCVN_PE_YCBCR_411_CBYYCRYY = 8,
                        TCVN_PE_YCBCR_422_CBYCRY = 9,
                        TCVN_PE_YCBCR_422_YCBYCR = 10
                    }
                    enum ETcVnPixelPackMode {
                        TCVN_PPM_NONE = 0,
                        TCVN_PPM_MONO1P = 1,
                        TCVN_PPM_MONO2P = 2,
                        TCVN_PPM_MONO4P = 3,
                        TCVN_PPM_MONO10PACKED = 4,
                        TCVN_PPM_MONO12PACKED = 5,
                        TCVN_PPM_RGB10V1PACKED = 6,
                        TCVN_PPM_RGB10P32 = 7,
                        TCVN_PPM_RGB12V1PACKED = 8,
                        TCVN_PPM_RGB565P = 9,
                        TCVN_PPM_BGR565P = 10,
                        TCVN_PPM_MONO10P = 11,
                        TCVN_PPM_MONO12P = 12
                    }
                    enum ETcVnRotationAngle {
                        TCVN_RA_90_DEG = 0,
                        TCVN_RA_180_DEG = 1,
                        TCVN_RA_270_DEG = 2
                    }
                    enum ETcVnSignedNormalization {
                        TCVN_SN_FIX_ZERO = 0,
                        TCVN_SN_FULL_SCALE = 1
                    }
                    enum ETcVnStructuringElementShape {
                        TCVN_SES_RECTANGLE = 0,
                        TCVN_SES_CROSS = 1,
                        TCVN_SES_ELLIPSE = 2
                    }
                    enum ETcVnTemplateMatchMethod {
                        TCVN_TMM_SQDIFF = 0,
                        TCVN_TMM_SQDIFF_NORMED = 1,
                        TCVN_TMM_CCORR = 2,
                        TCVN_TMM_CCORR_NORMED = 3,
                        TCVN_TMM_CCOEFF = 4,
                        TCVN_TMM_CCOEFF_NORMED = 5
                    }
                    enum ETcVnThresholdType {
                        TCVN_TT_BINARY = 0,
                        TCVN_TT_BINARY_INV = 1,
                        TCVN_TT_TRUNC = 2,
                        TCVN_TT_TOZERO = 3,
                        TCVN_TT_TOZERO_INV = 4,
                        TCVN_TT_OTSU_BINARY = 8,
                        TCVN_TT_OTSU_BINARY_INV = 9,
                        TCVN_TT_OTSU_TRUNC = 10,
                        TCVN_TT_OTSU_TOZERO = 11,
                        TCVN_TT_OTSU_TOZERO_INV = 12,
                        TCVN_TT_TRIANGLE_BINARY = 16,
                        TCVN_TT_TRIANGLE_BINARY_INV = 17,
                        TCVN_TT_TRIANGLE_TRUNC = 18,
                        TCVN_TT_TRIANGLE_TOZERO = 19,
                        TCVN_TT_TRIANGLE_TOZERO_INV = 20
                    }
                    enum ETcVnVectorCompareMethod {
                        TCVN_VCM_EUCLIDEAN = 0,
                        TCVN_VCM_ELEMENTWISE = 1
                    }
                    enum ETcWatchdogAccumulationType {
                        WD_ACC_TYPE_MEAN = 1,
                        WD_ACC_TYPE_PRODUCT = 2
                    }
                    type TcVnCameraCalibrationOptions = {
                        bUseIntrinsicGuess: BIT;
                        bFixAspectRatio: BIT;
                        bFixPrincipalPoint: BIT;
                        bZeroTangentDist: BIT;
                        bFixFocalLength: BIT;
                        bFixK1: BIT;
                        bFixK2: BIT;
                        bFixK3: BIT;
                        bFixK4: BIT;
                        bFixK5: BIT;
                        bFixK6: BIT;
                        bRationalModel: BIT;
                    };
                    type TcVnCircularArc = {
                        aCenter: TcVnPoint2_REAL;
                        fRadius: REAL;
                        fStartAngle: REAL;
                        fEndAngle: REAL;
                    };
                    type TcVnDMatch = {
                        nQueryIdx: DINT;
                        nTrainIdx: DINT;
                        nImageIdx: DINT;
                        fDistance: REAL;
                    };
                    type TcVnImageInfo = {
                        nImageSize: ULINT;
                        nWidth: UDINT;
                        nHeight: UDINT;
                        nXPadding: UINT;
                        nYPadding: UINT;
                        stPixelFormat: TcVnPixelFormat;
                    };
                    type TcVnKeyPoint = {
                        aPoint: TcVnPoint2_REAL;
                        fDiameter: REAL;
                        fAngle: REAL;
                        fResponse: REAL;
                        nOctave: DINT;
                        nClassId: DINT;
                    };
                    type TcVnMatrix = {
                        nRows: UDINT;
                        nCols: UDINT;
                        eType: ETcVnElementType;
                        pData: PVOID;
                    };
                    type TcVnMoments = {
                        fM00: LREAL;
                        fM10: LREAL;
                        fM01: LREAL;
                        fM20: LREAL;
                        fM11: LREAL;
                        fM02: LREAL;
                        fM30: LREAL;
                        fM21: LREAL;
                        fM12: LREAL;
                        fM03: LREAL;
                        fMu20: LREAL;
                        fMu11: LREAL;
                        fMu02: LREAL;
                        fMu30: LREAL;
                        fMu21: LREAL;
                        fMu12: LREAL;
                        fMu03: LREAL;
                        fNu20: LREAL;
                        fNu11: LREAL;
                        fNu02: LREAL;
                        fNu30: LREAL;
                        fNu21: LREAL;
                        fNu12: LREAL;
                        fNu03: LREAL;
                    };
                    type TcVnParamsAGAST = {
                        nThreshold: DINT;
                        bNonMaxSuppression: BOOL;
                        eType: ETcVnKeypointDetectionTypeAGAST;
                    };
                    type TcVnParamsAKAZE = {
                        eDescrType: ETcVnFeatureDescriptorTypeAKAZE;
                        nDescrSize: UDINT;
                        nDescrChannels: UDINT;
                        fThreshold: REAL;
                        nOctaves: UDINT;
                        nOctaveLayers: UDINT;
                        eDiffusivity: ETcVnDiffusivityTypeKAZE;
                    };
                    interface TcVnParamsBlobDetection {
                        bFilterByArea: BOOL;
                        bFilterByCircularity: BOOL;
                        bFilterByConvexity: BOOL;
                        bFilterByEccentricity: BOOL;
                        bFilterByInertiaRatio: BOOL;
                        fMinArea: REAL;
                        fMaxArea: REAL;
                        fMinCircularity: REAL;
                        fMaxCircularity: REAL;
                        fMinConvexity: REAL;
                        fMaxConvexity: REAL;
                        fMinEccentricity: REAL;
                        fMaxEccentricity: REAL;
                        fMinInertiaRatio: REAL;
                        fMaxInertiaRatio: REAL;
                        eThresholdType: ETcVnThresholdType;
                        fMinThreshold: REAL;
                        fMaxThreshold: REAL;
                        fThresholdStep: REAL;
                        fMinBlobDistance: REAL;
                        nMinRepeatability: UDINT;
                        eBlobCombination: ETcVnBlobCombination;
                    }
                    type TcVnParamsBRISK = {
                        nThreshold: DINT;
                        nOctaves: UDINT;
                        fPatternScale: REAL;
                    };
                    type TcVnParamsFAST = {
                        nThreshold: DINT;
                        bNonMaxSuppression: BOOL;
                        eType: ETcVnKeypointDetectionTypeFAST;
                    };
                    type TcVnParamsGFTT = {
                        nMaxCorners: UDINT;
                        fQualityLevel: LREAL;
                        fMinDistance: LREAL;
                        nBlockSize: UDINT;
                        bUseHarrisDetector: BOOL;
                        fHarrisK: LREAL;
                    };
                    type TcVnParamsKAZE = {
                        bExtended: BOOL;
                        bUpright: BOOL;
                        fThreshold: REAL;
                        nOctaves: UDINT;
                        nOctaveLayers: UDINT;
                        eDiffusivity: ETcVnDiffusivityTypeKAZE;
                    };
                    type TcVnParamsMSER = {
                        nDelta: DINT;
                        nMinArea: UDINT;
                        nMaxArea: UDINT;
                        fMaxVariation: LREAL;
                        fMinDiversity: LREAL;
                        nMaxEvolution: UDINT;
                        fAreaThreshold: LREAL;
                        fMinMargin: LREAL;
                        nEdgeBlurSize: UDINT;
                    };
                    type TcVnParamsORB = {
                        nMaxPoints: UDINT;
                        fPyramidScale: REAL;
                        nPyramidLevels: UDINT;
                        nEdgeThreshold: UDINT;
                        nFirstLevel: UDINT;
                        nBriefPoints: UDINT;
                        eScoreType: ETcVnFeatureScoreTypeORB;
                        nPatchSize: UDINT;
                        nFastThreshold: DINT;
                    };
                    type TcVnParamsSB = {
                        bFilterByArea: BOOL;
                        bFilterByCircularity: BOOL;
                        bFilterByColor: BOOL;
                        bFilterByConvexity: BOOL;
                        bFilterByInertia: BOOL;
                        fMinArea: REAL;
                        fMaxArea: REAL;
                        fMinCircularity: REAL;
                        fMaxCircularity: REAL;
                        nBlobColor: USINT;
                        fMinConvexity: REAL;
                        fMaxConvexity: REAL;
                        fMinInertiaRatio: REAL;
                        fMaxInertiaRatio: REAL;
                        fMinBlobDist: REAL;
                        nMinRepeatability: UDINT;
                        fMinThreshold: REAL;
                        fMaxThreshold: REAL;
                        fThresholdStep: REAL;
                    };
                    type TcVnPixelFormat = {
                        bSupported: BIT;
                        bSigned: BIT;
                        bPlanar: BIT;
                        bFloat: BIT;
                        nChannels: BYTE;
                        ePixelEncoding: ETcVnPixelEncoding;
                        ePixelPackMode: ETcVnPixelPackMode;
                        nElementSize: UINT;
                        nTotalSize: UINT;
                    };
                    type TcVnRectangle_DINT = {
                        nX: DINT;
                        nY: DINT;
                        nWidth: DINT;
                        nHeight: DINT;
                    };
                    type TcVnRectangle_UDINT = {
                        nX: UDINT;
                        nY: UDINT;
                        nWidth: UDINT;
                        nHeight: UDINT;
                    };
                    type TcVnRotatedRectangle = {
                        aCenter: TcVnPoint2_REAL;
                        stSize: TcVnSize2_REAL;
                        fAngle: REAL;
                    };
                    type TcVnSize2_REAL = {
                        fWidth: REAL;
                        fHeight: REAL;
                    };
                }
            }
        }
    }
}
//# sourceMappingURL=Types.d.ts.map