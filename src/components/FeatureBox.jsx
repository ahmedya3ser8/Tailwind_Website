
function FeatureBox({title, icon, desc}) {
  return (
    <div className="text-white flex justify-center items-center flex-col text-center">
      <img src={`./src/assets/images/${icon}`} alt="icon" className="w-[80px] h-[80px] object-contain" />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  )
}

export default FeatureBox;