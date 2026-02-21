export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-2xl">T</span>
        </div>
        <div className="space-y-3 max-w-sm mx-auto">
          <div className="h-4 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
}
