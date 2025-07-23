const ServicesSection = () => {
  const services = [
    {
      icon: "🎨",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: "📊",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: "⚡",
      title: "Magni Dolores",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      icon: "🔧",
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
  ]

  return (
    <section id="services" className="py-20 px-8 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
