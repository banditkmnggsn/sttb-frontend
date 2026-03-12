import { PageHeader } from '../../components/admin/PageHeader';
import { Plus, Check } from 'lucide-react';

export function RolesPage() {
  const roles = [
    { id: '1', name: 'Super Admin', users: 1, description: 'Full system access' },
    { id: '2', name: 'Content Admin', users: 3, description: 'Manage all content' },
    { id: '3', name: 'Editor', users: 8, description: 'Create and edit content' },
    { id: '4', name: 'Approver', users: 2, description: 'Review and approve content' },
  ];

  const permissions = {
    content: [
      { id: 'content.create', label: 'Create Content' },
      { id: 'content.edit', label: 'Edit Content' },
      { id: 'content.delete', label: 'Delete Content' },
      { id: 'content.publish', label: 'Publish Content' },
    ],
    media: [
      { id: 'media.upload', label: 'Upload Media' },
      { id: 'media.delete', label: 'Delete Media' },
    ],
    users: [
      { id: 'users.view', label: 'View Users' },
      { id: 'users.create', label: 'Create Users' },
      { id: 'users.edit', label: 'Edit Users' },
      { id: 'users.delete', label: 'Delete Users' },
    ],
    settings: [
      { id: 'settings.view', label: 'View Settings' },
      { id: 'settings.edit', label: 'Edit Settings' },
    ],
  };

  // Mock permissions matrix
  const rolePermissions: Record<string, string[]> = {
    '1': Object.values(permissions).flat().map(p => p.id), // Super Admin has all
    '2': ['content.create', 'content.edit', 'content.delete', 'content.publish', 'media.upload', 'media.delete'],
    '3': ['content.create', 'content.edit', 'media.upload'],
    '4': ['content.publish'],
  };

  return (
    <>
      <PageHeader
        title="Roles & Permissions"
        description="Configure user roles and access control"
        breadcrumbs={[{ label: 'Roles & Permissions' }]}
        actions={
          <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors flex items-center gap-2">
            <Plus size={18} />
            Create Role
          </button>
        }
      />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Roles List */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Roles</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {roles.map((role) => (
                <div key={role.id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{role.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{role.users} users</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Permissions Matrix */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Permission Matrix</h2>
              <p className="text-sm text-gray-500 mt-1">Configure permissions for each role</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Permission</th>
                    {roles.map((role) => (
                      <th key={role.id} className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        {role.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(permissions).map(([category, perms]) => (
                    <>
                      <tr key={category} className="bg-gray-50">
                        <td colSpan={roles.length + 1} className="px-6 py-2 text-sm font-semibold text-gray-700 uppercase">
                          {category}
                        </td>
                      </tr>
                      {perms.map((perm) => (
                        <tr key={perm.id} className="hover:bg-gray-50">
                          <td className="px-6 py-3 text-sm text-gray-900">{perm.label}</td>
                          {roles.map((role) => (
                            <td key={role.id} className="px-4 py-3 text-center">
                              <input
                                type="checkbox"
                                checked={rolePermissions[role.id]?.includes(perm.id)}
                                className="w-4 h-4 text-[#C1121F] border-gray-300 rounded focus:ring-[#C1121F]"
                                readOnly
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button className="px-4 py-2 bg-[#C1121F] text-white rounded-lg hover:bg-[#9A0E19] transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
