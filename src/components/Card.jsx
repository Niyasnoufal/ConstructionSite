const Card = ({ item }) => {
  
  return (
    <div className="w-[500px] py-10 bg-white rounded-lg " key={item.id}>
      <h1 className="text-xl opacity-75 px-8">{item.name}</h1>
      <span className="px-6 opacity-30">{item.role}</span>
      <p className="px-5 text-sm">{item.feedback}</p>
    </div>
  );
};

export default Card;
