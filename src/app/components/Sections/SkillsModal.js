const SkillsModal = ({ isOpen, onClose, skillsData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Skills">
      <p className="text-gray-600 mb-6">
        {skillsData.description}
      </p>
      <div className="space-y-4">
        {skillsData.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} index={index} />
        ))}
      </div>
    </Modal>
  );
};