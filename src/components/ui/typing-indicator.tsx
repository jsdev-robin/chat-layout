const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-0.5">
      <span className="w-1.5 h-1.5 bg-muted-500 rounded-full animate-bubble" />
      <span className="w-1.5 h-1.5 bg-muted-500 rounded-full animate-bubble [animation-delay:0.2s]" />
      <span className="w-1.5 h-1.5 bg-muted-500 rounded-full animate-bubble [animation-delay:0.4s]" />
    </div>
  );
};

export default TypingIndicator;
