# 🔍 Grow Filter - Interactive Cannabis Strain Search

> **Advanced Strain Filtering & Search Interface | 2,793+ Strains | Real-time Data Visualization**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-GitHub_Pages-blue.svg)](https://shannon-goddard.github.io/grow_filter/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.0+-purple.svg)](https://getbootstrap.com/)

## 🚀 Project Overview

**Grow Filter** is a powerful, interactive web application that transforms the comprehensive cannabis strain database into an intuitive, searchable, and filterable interface. Built with modern web technologies, it provides users with instant access to detailed information about **2,793+ cannabis strains** through advanced filtering, sorting, and search capabilities.

### ✨ Key Features

- **🔍 Real-time Search** - Instant strain lookup with live filtering
- **📊 Advanced Filtering** - Filter by strain type (Indica, Sativa, Hybrid)
- **🔄 Dynamic Sorting** - Click column headers to sort data
- **📱 Responsive Design** - Mobile-optimized interface
- **💡 Detailed Views** - Expandable strain information panels
- **⚡ Fast Performance** - Optimized for quick data access
- **🎨 Modern UI** - Clean, professional interface design

## 🌐 Live Demo

**[🚀 Try the Live Application](https://shannon-goddard.github.io/grow_filter/)**

![Demo Animation](/pics/gif.gif)

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling and responsive design
- **JavaScript ES6+** - Interactive functionality and data manipulation
- **jQuery** - DOM manipulation and event handling
- **Bootstrap 4** - Responsive grid system and components
- **Font Awesome** - Professional iconography

### Data Integration
- **D3.js** - Data visualization and manipulation
- **JSON/CSV** - Structured data formats
- **AJAX** - Asynchronous data loading

## 📊 Application Features

### 🔍 Search & Filter Capabilities

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Text Search** | Real-time strain name filtering | Live input event handling |
| **Type Filter** | Filter by Indica/Sativa/Hybrid | Dropdown selection with instant results |
| **Column Sorting** | Sort by any data column | Click-to-sort with visual indicators |
| **Responsive Table** | Mobile-optimized data display | Bootstrap responsive tables |

### 📋 Data Display

```javascript
// Sample strain data structure
{
  index: "0",
  strain: "Green Crack",
  THC: "Normal",
  CBD: "Very Low", 
  Indica: "Very Low",
  Sativa: "Normal",
  Hybrid: "Low",
  Grow: "8-9",
  logo: "strain-image-url",
  info: "Detailed strain information...",
  more_info: "Extended strain details..."
}
```

## 🏗️ Project Structure

```
grow_filter/
├── static/
│   ├── CSS/
│   │   └── style.css          # Custom styling and responsive design
│   ├── js/
│   │   ├── app.js            # Main application logic
│   │   └── data.js           # Strain database (2,793+ records)
│   └── images/
│       ├── logo.jpg          # Application branding
│       └── strain-images/    # Individual strain photos
├── pics/
│   ├── header.png           # README header image
│   └── gif.gif             # Demo animation
├── index.html              # Main application interface
├── LICENSE                 # MIT License
└── README.md              # This documentation
```

## 🚀 Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shannon-Goddard/grow_filter.git
   cd grow_filter
   ```

2. **Open locally**
   ```bash
   # Serve with Python (recommended)
   python -m http.server 8000
   
   # Or simply open index.html in your browser
   open index.html
   ```

3. **Access the application**
   ```
   http://localhost:8000
   ```

### Development Setup

```bash
# No build process required - pure vanilla web technologies
# Just edit files and refresh browser

# For development server with live reload:
npx live-server
```

## 💻 Usage Guide

### 🔍 Search Functionality

```javascript
// Real-time search implementation
input.addEventListener('keyup', function(event) {
  filterTable();
});

function filterTable() {
  let filter = input.value.toUpperCase();
  // Filter table rows based on search input
}
```

### 📊 Filtering Options

1. **Text Search**: Type strain names in the search box
2. **Type Filter**: Select from dropdown (ALL, Indica, Sativa, Hybrid)
3. **Column Sorting**: Click any column header to sort
4. **Detailed View**: Click "Show more info" for complete strain data

### 📱 Mobile Experience

- **Responsive Navigation**: Collapsible mobile menu
- **Touch-Friendly**: Optimized button sizes and spacing
- **Fast Loading**: Optimized for mobile networks
- **Swipe Support**: Natural mobile interactions

## ⚡ Performance Optimizations

### Current Optimizations
- **Client-side Filtering**: Instant search results
- **Efficient DOM Manipulation**: Minimal reflows and repaints
- **Lazy Loading**: Images loaded on demand
- **Compressed Assets**: Minified CSS and JavaScript

### Planned Improvements
- **Virtual Scrolling**: Handle large datasets efficiently
- **Service Workers**: Offline functionality
- **Code Splitting**: Reduce initial bundle size
- **CDN Integration**: Faster global content delivery

## 🎯 Use Cases

### 👥 End Users
- **Strain Discovery**: Find new strains based on preferences
- **Quick Reference**: Access strain information instantly
- **Comparison Tool**: Compare multiple strains side-by-side
- **Mobile Access**: Search strains on-the-go

### 🔬 Researchers
- **Data Analysis**: Filter strains by specific criteria
- **Pattern Recognition**: Identify trends in strain characteristics
- **Export Functionality**: Access filtered datasets
- **API Integration**: Connect with research tools

### 💼 Business Applications
- **Inventory Management**: Track available strains
- **Customer Service**: Quick strain lookup for staff
- **Product Catalog**: Display strain information to customers
- **Market Analysis**: Analyze strain popularity and trends

## 🔧 Technical Implementation

### Core Functionality

```javascript
// Dynamic table population
function populateTable() {
  table.innerHTML = '';
  for (let data of tableData) {
    let row = table.insertRow(-1);
    // Populate row with strain data
  }
}

// Advanced filtering system
function myFunction() {
  var filter = input.value.toUpperCase();
  // Multi-column filtering logic
}
```

### Data Processing Pipeline

1. **Data Loading**: CSV → JavaScript objects
2. **Table Generation**: Dynamic HTML table creation
3. **Event Binding**: Search and filter event handlers
4. **Real-time Updates**: Instant UI updates on user input

## 🔗 Integration & APIs

### Data Sources
- **Primary**: [Grow Data Repository](https://github.com/Shannon-Goddard/grow_data)
- **Format**: CSV/JSON strain database
- **Updates**: Synchronized with main database

### Related Projects
- **[GrowApp Cannabis Guide](https://growappcannabis.guide)** - Main cultivation platform
- **[Grow Data](https://github.com/Shannon-Goddard/grow_data)** - Source database
- **Grow Nutrients** - Feeding schedule calculator
- **Grow Plant** - Plant management tools

## 🤝 Contributing

We welcome contributions to enhance the filtering and search experience!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/enhancement`)
3. **Commit** your changes (`git commit -m 'Add search enhancement'`)
4. **Push** to the branch (`git push origin feature/enhancement`)
5. **Open** a Pull Request

### Areas for Contribution

- 🔍 **Search Enhancements** - Advanced search algorithms
- 📊 **Data Visualization** - Charts and graphs
- 📱 **Mobile Optimization** - Enhanced mobile experience
- ⚡ **Performance** - Speed and efficiency improvements
- 🎨 **UI/UX** - Design and usability enhancements

## 📈 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| **Load Time** | ~8 seconds | <3 seconds |
| **Search Response** | <100ms | <50ms |
| **Mobile Score** | 85/100 | 95/100 |
| **Data Size** | 36,312 records | Optimized |

## ⚠️ Known Issues & Roadmap

### Current Limitations
- **Load Time**: Initial data loading takes ~8 seconds
- **Mobile Filtering**: Some filter functions need mobile optimization
- **Data Updates**: Manual synchronization with source database

### Planned Improvements
- **Hard-coded Tables**: Pre-render HTML for faster loading
- **Variable Optimization**: Compress and abbreviate data variables
- **Code Condensation**: Minimize JavaScript bundle size
- **Progressive Loading**: Load data in chunks

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### License Summary
- ✅ **Commercial use** allowed
- ✅ **Modification** allowed  
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❗ **License and copyright notice** required

## 🙏 Acknowledgments

- **Cannabis Community** - For strain knowledge and feedback
- **Open Source Libraries** - Bootstrap, jQuery, Font Awesome
- **Wikileaf.com** - Original data source for strain information
- **Web Development Community** - For tools and best practices

## 📞 Contact & Support

- **Live Demo**: [https://shannon-goddard.github.io/grow_filter/](https://shannon-goddard.github.io/grow_filter/)
- **Issues**: [GitHub Issues](https://github.com/Shannon-Goddard/grow_filter/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Shannon-Goddard/grow_filter/discussions)
- **Email**: shannon@loyal9.app

---

<div align="center">

**Built with 🔍 for the cannabis cultivation community**

*Empowering growers with instant strain discovery*

</div>
