function ResetPasswordForm() {
  return (
    <>
      <div className="mb-6 font-semibold">Reset password</div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-gray-500">Current password</label>
          <input type="password" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white" />
        </div>

        <div>
          <label className="text-xs text-gray-500">New password</label>
          <input type="password" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white" />
        </div>

        <div>
          <label className="text-xs text-gray-500">Confirm new password</label>
          <input type="password" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white" />
        </div>
      </div>

      <button className="mt-8 px-8 py-2 rounded-full bg-black text-white text-sm">
        Update password
      </button>
    </>
  );
}

export default ResetPasswordForm;