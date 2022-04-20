function Card({ img, title, style, click }) {
  return (
    <div
      className="mx-auto flex w-80 flex-col justify-center rounded shadow-xl shadow-slate-300/60 cursor-pointer box-border"
      style={style}
      onClick={click}
    >
      <img className="aspect-video w-80 rounded-t object-cover object-center" src={img} alt={title} />
      <div className="px-4 py-6">
        <h1 className="text-2xl text-center font-medium text-slate-600">{title}</h1>
      </div>
    </div>
  )
}

export default Card