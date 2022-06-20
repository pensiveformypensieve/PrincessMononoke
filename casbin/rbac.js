const { newEnforcer } = require('casbin');

const sub = 'alice'; // the user that wants to access a resourcnewEnforcer
const obj = 'data1'; // the resource that is going to be accessed.
const act = 'read'; // the operation that the user performs on the resourcnewEnforcer

// roles
exports.getRolesForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getRolesForUser = await enforcer.getRolesForUser('alice');
    console.log(getRolesForUser);
});

exports.getUsersForRole = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getUsersForRole = await enforcer.getUsersForRole('data2_admin');
    console.log(getUsersForRole);
});

exports.hasRoleForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const hasRoleForUser = await enforcer.hasRoleForUser('alice', 'data1_admin');
    console.log(hasRoleForUser);
});

exports.addRoleForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const addRoleForUser = await enforcer.addRoleForUser('alice', 'data2_admin');
    console.log(addRoleForUser);
});

exports.addRolesForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const addRolesForUser = ["data1_admin", "data2_admin"];
    roles.map((role) => enforcer.addRoleForUser("alice", role));
    console.log(addRolesForUser);
});

exports.deleteRoleForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deleteRoleForUser = await enforcer.DeleteRoleForUser("alice", "data1_admin");
    console.log(deleteRoleForUser);
});

exports.deleteRolesForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deleteRolesForUser = await enforcer.DeleteRolesForUser("alice");
    console.log(deleteRolesForUser);
});

exports.deleteRole = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deleteRole = await enforcer.DeleteRole("data2_admin");
    console.log(deleteRole);
});

// user
exports.deleteUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deleteUser = await enforcer.DeleteUser("alice");
    console.log(deleteUser);
});

// permission
exports.deletePermission = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deletePermission = await enforcer.deletePermission('read');
    console.log(deletePermission);
});

exports.deletePermissionForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deletePermissionForUser = await enforcer.addPermissionForUser('bob', 'read');
    console.log(deletePermissionForUser);
});

exports.addPermissionsForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const addPermissionsForUser = [
        ["data1", "read"],
        ["data2", "write"],
    ];
    permissions.map((permission) => enforcer.addPermissionForUser("bob", ...permission));
    console.log(addPermissionsForUser);
});

exports.deletePermissionForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deletePermissionForUser = await enforcer.deletePermissionForUser("bob", "read");
    console.log(deletePermissionForUser);
});

exports.deletePermissionsForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const deletePermissionsForUser = await enforcer.deletePermissionsForUser('bob');
    console.log(deletePermissionsForUser);
});

exports.getPermissionsForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getPermissionsForUser = await enforcer.getPermissionsForUser('bob');
    console.log(getPermissionsForUser);
});

exports.hasPermissionForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const hasPermissionForUser = await enforcer.hasPermissionForUser('alice', 'read');
    console.log(hasPermissionForUser);
});

// implicit roles
exports.getImplicitRolesForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getImplicitRolesForUser = await enforcer.getImplicitRolesForUser("alice");
    console.log(getImplicitRolesForUser);
});

exports.getImplicitUsersForRole = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getImplicitUsersForRole = enforcer.getImplicitUsersForRole("role:user");
    console.log(getImplicitUsersForRole);
});

exports.getImplicitPermissionsForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getImplicitPermissionsForUser = await enforcer.getImplicitPermissionsForUser("alice")
    consolenforcer.log(getImplicitPermissionsForUser);
});

exports.getNamedImplicitPermissionsForUser = (async(req,res) => {
    const enforcer = await newEnforcer('rbac_model.conf', 'rbac_policy.csv');
    const getNamedImplicitPermissionsForUser = await enforcer.getNamedImplicitPermissionsForUser('p2','alice');
    consolenforcer.log(getNamedImplicitPermissionsForUser);
});

