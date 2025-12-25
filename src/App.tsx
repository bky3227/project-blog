import './App.css'
<link href="/src/style.css" rel="stylesheet"></link>

function App() {
  return (
    <body className="bg-white p-10 text-[#26231E]">
    <div className="flex gap-24">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Colors</h2>

        <p className="font-medium mb-3">Base</p>
        <div className="flex flex-wrap gap-4">
          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#26231E] mb-1"></div>
            <p>Brown 600<br /><span className="text-gray-400">#26231E</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#34303B] mb-1"></div>
            <p>Brown 500<br /><span className="text-gray-400">#34303B</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#75716B] mb-1"></div>
            <p>Brown 400<br /><span className="text-gray-400">#75716B</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#DAD6D1] mb-1"></div>
            <p>Brown 300<br /><span className="text-gray-400">#DAD6D1</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#EFECE8] mb-1"></div>
            <p>Brown 200<br /><span className="text-gray-400">#EFECE8</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#F9F8F6] mb-1"></div>
            <p>Brown 100<br /><span className="text-gray-400">#F9F8F6</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-white border border-gray-200 mb-1"></div>
            <p>White<br /><span className="text-gray-400">#FFFFFF</span></p>
          </div>
        </div>

        <p className="font-medium mt-10 mb-3">Brand</p>
        <div className="flex gap-4">
          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#F2B68C] mb-1"></div>
            <p>Orange<br /><span className="text-gray-400">#F2B68C</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#12B279] mb-1"></div>
            <p>Green<br /><span className="text-gray-400">#12B279</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#D7F2E9] mb-1"></div>
            <p>Green<br /><span className="text-gray-400">#D7F2E9</span></p>
          </div>

          <div className="w-[90px] text-xs">
            <div className="h-16 rounded-md bg-[#EB5164] mb-1"></div>
            <p>Red<br /><span className="text-gray-400">#EB5164</span></p>
          </div>
        </div>
      </div>

      <div className="w-72">
        <h2 className="text-2xl font-semibold mb-6">Fonts</h2>

        <h1 className="text-4xl font-bold mb-4">Headline 1</h1>
        <h2 className="text-3xl font-semibold mb-3">Headline 2</h2>
        <h3 className="text-xl font-semibold mb-3">Headline 3</h3>
        <h4 className="text-lg font-semibold mb-3">Headline 4</h4>

        <p className="text-base mb-2">Body 1</p>
        <p className="text-sm mb-2">Body 2</p>

      </div>
    </div>
  </body>
    // <h1 className="text-3xl font-bold underline text-brand-green">
    //   Hello world!
    // </h1>
  )
}

export default App
