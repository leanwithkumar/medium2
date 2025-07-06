import React from 'react'

function Profilepage() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('URL copied to clipboard!')
    } catch (err) {
      alert('Failed to copy URL.')
      console.error(err)
    }
  }

  return (
    <>
    <div className="py-5 text-gray-600">
        <div >
        <div className="text-5xl flex justify-between items-center">
          <div>Abhay Kumar</div>
          <button
            onClick={handleCopy}
            className="text-2xl px-3  text-gray-700"
            title="Copy URL"
          >
            &#8942;
          </button>
        </div>
      </div>


      <div className='py-5'>
        <div>This is bio hello my name is abhay kumar</div>
      </div>

    </div>
      
    </>
  )
}

export default Profilepage
