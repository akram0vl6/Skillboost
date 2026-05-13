export const TaskTags = ({ difficulty, status, company, acceptance, language }) => {
  const tags = [
    { label: difficulty, color: 'orange' },
    { label: status, color: status === 'Решено' ? 'green' : 'red' },
    { label: company, color: 'gray' },
    { label: acceptance, color: 'gray' },
    { label: language, color: 'yellow' },
  ];

  return (
    <div className="flex items-center space-x-2 flex-wrap gap-y-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-2 py-0.5 text-xs rounded-full border font-medium transition-colors"
          style={{
            backgroundColor: `var(--tag-${tag.color}-bg)`,
            color: `var(--tag-${tag.color}-text)`,
            borderColor: `var(--tag-${tag.color}-border)`,
          }}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};