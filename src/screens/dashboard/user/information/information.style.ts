import { get } from 'immer/dist/internal';
import { StyleSheet } from 'react-native';
import Dimens from 'src/base/common/Dimens';
import { getSize } from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
    backgroundLogin: {
        ...StyleSheet.absoluteFillObject,
    },
    containerHome: {
        marginTop: getSize.m(20),
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: getSize.m(15),
        paddingRight: getSize.m(15),
        width: Dimens.DEVICE_WIDTH,
    },
    content: {
        flex: 1,
    },
    contentHome: {
        paddingBottom: 20,
        marginTop: 20,
        alignSelf: 'center',
        width: Dimens.DEVICE_WIDTH * 0.8,
        backgroundColor: '#F75553',
        borderRadius: getSize.m(10),
    },
    contentTablet: {
        alignSelf: 'center',
        width: Dimens.DEVICE_WIDTH * 0.75,
        marginVertical: getSize.v(20),
        elevation: 3,
        shadowColor: Color.GRAY_DEEP,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        paddingHorizontal: Dimens.DEVICE_WIDTH * 0.12,
        backgroundColor: Color.WHITE,
    },
    text: {
        padding: 10,
        color: Color.WHITE,
        textAlign: 'center',
        fontSize: 20,
    },
    number: {
        backgroundColor: Color.TEXT_PRIMARY,
        color: '#fff',
        borderRadius: getSize.m(10),
        padding: getSize.m(10),
        width: 20,
        height: 20,
    },
    tableSchedule: {},
    time: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    hour: {
        marginRight: 5,
    },
    main: {},
    // user
    textUser: {
        color: Color.TEXT_PRIMARY,
    },
    btnBack: {
        marginTop: 20,
    },
    avtUser: {
        alignItems: 'center',
    },
    avtImg: {
        width: getSize.m(100),
        height: getSize.m(100),
    },
    textAvt: {
        color: '#ccc',
        fontSize: getSize.m(20),
    },
    settingUser: {
        color: '#686862',
        marginLeft: getSize.m(4),
        fontSize: getSize.m(12),
    },
    ItemInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getSize.m(10),
    },
    mainItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    // timetable
    timetableTitle: {
        color: Color.TEXT_PRIMARY,
        fontSize: getSize.m(20),
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: getSize.m(20),
    },
    status: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getSize.m(10),
    },
    statusTitle: {
        color: '#232323',
        fontWeight: '500',
        fontSize: getSize.m(15),
        marginRight: getSize.m(10),
    },
    statusY: {
        fontSize: getSize.m(15),
        color: Color.TEXT_SECONDARY,
    },
    statusN: {
        fontSize: getSize.m(15),
        color: Color.TEXT_PRIMARY,
    },
    Notes: {
        overflow: 'visible',
        flexDirection: 'row',
        marginTop: getSize.m(15),
    },
    notesTitle: {
        color: Color.TEXT_PRIMARY,
        fontWeight: '500',
        fontSize: getSize.m(15),
        marginRight: getSize.m(10),
    },
    notesDes: {
        color: '#232323',
        fontSize: getSize.m(15),
        width: Dimens.DEVICE_WIDTH,
    },
    btnLogin: {
        backgroundColor: Color.TEXT_PRIMARY,
        height: getSize.m(48),
        borderRadius: getSize.m(24),
        marginTop: getSize.m(30),
        ...Styles.centerNoFlex,
        marginBottom: getSize.m(20),
    },
    textLogin: {
        color: Color.WHITE,
        fontFamily: Font.font_SVN_700,
        fontSize: getSize.m(15, 0.3),
    },
});

export default styles;
