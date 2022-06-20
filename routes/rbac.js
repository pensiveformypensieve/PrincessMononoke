const express = require('express');
const rbac = require('../casbin/rbac');

const router = express.Router();

router.get('/getRolesForUser', rbac.getRolesForUser);
router.get('/getUsersForRole', rbac.getUsersForRole);

module.exports = router;
