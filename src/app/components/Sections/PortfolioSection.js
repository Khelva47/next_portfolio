const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={`/placeholder.svg?height=300&width=400&text=Portfolio ${item}`}
                alt={`Portfolio ${item}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-sm">Web Design</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
