export default function OAuthButtons() {
    const handleGoogleLogin = () => {
        // Placeholder - replace with actual Google auth logic
        alert('Google login not implemented yet');
    };

    return (
        <div className="flex flex-col space-y-2 mt-4">
            <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold"
            >
                Continue with Google
            </button>
        </div>
    );
}
