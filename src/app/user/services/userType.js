import { PAID_ADMIN_ROLE } from '../../constants';

const isFree = ({ user }) => !(user.Subscribed & 1);
const isAdmin = ({ user }) => !isFree({ user }) && user.Role === PAID_ADMIN_ROLE;

/* @ngInject */
function userType(authentication) {
    return () => ({
        isAdmin: isAdmin(authentication),
        isFree: isFree(authentication)
    });
}
export default userType;
