import React, { useState, useEffect, useRef } from 'react';
import { X, MapPin, Users, Building, Phone, Mail, ExternalLink, TrendingUp, Award } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
    showCountyDetails: (countyId: string) => void;
  }
}

const GoogleMapsHeatmap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [selectedCounty, setSelectedCounty] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const counties = [
    {
      id: 'mombasa',
      name: 'Mombasa',
      lat: -4.0435,
      lng: 39.6682,
      population: '1.2M',
      businesses: 150,
      office: 'Nyali Bridge Plaza, Mombasa',
      contact: '+254 706 815605',
      email: 'mombasa@bluebizkenya.org',
      description: 'Kenya\'s second-largest city and main coastal commercial hub. Home to the largest port in East Africa and a major tourism destination.',
      highlights: ['Port of Mombasa - East Africa\'s largest port', 'Tourism & hospitality industry', 'Manufacturing and industrial zone', 'Blue economy innovation hub'],
      image: '/images/DSC_4977.JPG',
      color: '#ff671b',
      intensity: 0.9,
      stats: {
        entrepreneurs: 450,
        jobsCreated: 1200,
        fundingDeployed: '2M+'
      }
    },
    {
      id: 'kilifi',
      name: 'Kilifi',
      lat: -3.5107,
      lng: 39.8499,
      population: '1.4M',
      businesses: 120,
      office: 'Bofa Road, Kilifi Town',
      contact: '+254 700 123 457',
      email: 'kilifi@bluebizkenya.org',
      description: 'Known for pristine beaches, rich cultural heritage, and rapidly growing tourism industry. A key area for sustainable coastal development.',
      highlights: ['Pristine beach tourism', 'Cultural heritage sites', 'Sustainable fishing communities', 'Eco-tourism initiatives'],
      image: '/images/Eco-tourism.jpeg',
      color: '#f38b00',
      intensity: 0.8,
      stats: {
        entrepreneurs: 380,
        jobsCreated: 950,
        fundingDeployed: '1M+'
      }
    },
    {
      id: 'kwale',
      name: 'Kwale',
      lat: -4.1747,
      lng: 39.4502,
      population: '866K',
      businesses: 80,
      office: 'Ukunda Town Center',
      contact: '+254 700 123 458',
      email: 'kwale@bluebizkenya.org',
      description: 'Rich in mineral resources and home to beautiful coastal forests. Known for titanium mining and growing agricultural sector.',
      highlights: ['Titanium mining industry', 'Coastal forest conservation', 'Agricultural development', 'Beach resort tourism'],
      image: '/images/Mangrove-Restoration-20250514.jpeg',
      color: '#4fcdb0',
      intensity: 0.7,
      stats: {
        entrepreneurs: 280,
        jobsCreated: 720,
        fundingDeployed: '1.2M+'
      }
    },
    {
      id: 'lamu',
      name: 'Lamu',
      lat: -2.2717,
      lng: 40.9020,
      population: '143K',
      businesses: 45,
      office: 'Lamu Old Town',
      contact: '+254 700 123 459',
      email: 'lamu@bluebizkenya.org',
      description: 'UNESCO World Heritage site renowned for Swahili culture, traditional architecture, and dhow sailing. A unique cultural and tourism destination.',
      highlights: ['UNESCO World Heritage site', 'Swahili cultural preservation', 'Traditional dhow building', 'Cultural tourism'],
      image: '/images/Participants-in-a-training-session.JPG',
      color: '#2f7b6b',
      intensity: 0.6,
      stats: {
        entrepreneurs: 150,
        jobsCreated: 400,
        fundingDeployed: '800K+'
      }
    },
    {
      id: 'taitaTaveta',
      name: 'Taita-Taveta',
      lat: -3.3167,
      lng: 38.4167,
      population: '340K',
      businesses: 60,
      office: 'Voi Town Center',
      contact: '+254 700 123 460',
      email: 'taita@bluebizkenya.org',
      description: 'Home to world-famous Tsavo National Parks and rich wildlife. Known for conservation efforts and eco-tourism.',
      highlights: ['Tsavo National Parks', 'Wildlife conservation', 'Eco-tourism development', 'Sisal and mining industries'],
      image: '/images/Environment-Conservation.jpg',
      color: '#bdb92e',
      intensity: 0.65,
      stats: {
        entrepreneurs: 200,
        jobsCreated: 550,
        fundingDeployed: '950K+'
      }
    },
    {
      id: 'tanaRiver',
      name: 'Tana River',
      lat: -1.8500,
      lng: 40.1167,
      population: '315K',
      businesses: 40,
      office: 'Hola Town',
      contact: '+254 700 123 461',
      email: 'tana@bluebizkenya.org',
      description: 'Agricultural region along Kenya\'s longest river. Known for irrigation farming, livestock, and rich biodiversity.',
      highlights: ['Tana River irrigation', 'Livestock farming', 'Biodiversity conservation', 'Agricultural innovation'],
      image: '/images/TNS_BLUE_BIZ_.JPG',
      color: '#d22a2f',
      intensity: 0.6,
      stats: {
        entrepreneurs: 180,
        jobsCreated: 480,
        fundingDeployed: '750K+'
      }
    }
  ];

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      window.initMap = initializeMap;
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCNYSPZ4PChWS6zjU72LHpKSXQ13plNfQQ&callback=initMap&libraries=visualization`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapOptions = {
        zoom: 8,
        center: { lat: -3.5, lng: 39.8 },
        mapTypeId: 'hybrid',
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#0ea5e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f2' }, { lightness: 20 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f2' }, { lightness: 21 }]
          }
        ],
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      };

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(newMap);

      const heatmapData = counties.map(county => ({
        location: new window.google.maps.LatLng(county.lat, county.lng),
        weight: county.intensity * 100
      }));

      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: newMap,
        radius: 50,
        opacity: 0.8,
        gradient: [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
      });

      counties.forEach(county => {
        const marker = new window.google.maps.Marker({
          position: { lat: county.lat, lng: county.lng },
          map: newMap,
          title: county.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: county.color,
            fillOpacity: 0.9,
            strokeColor: '#ffffff',
            strokeWeight: 3,
            strokeOpacity: 1
          },
          animation: window.google.maps.Animation.DROP
        });

        // Create info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 300px;">
              <h3 style="margin: 0 0 8px 0; color: #141413; font-size: 18px; font-weight: bold;">${county.name} County</h3>
              <div style="display: flex; gap: 15px; margin-bottom: 8px; font-size: 14px; color: #666;">
                <span><strong>👥 ${county.population}</strong></span>
                <span><strong>🏢 ${county.businesses}+ businesses</strong></span>
              </div>
              <p style="margin: 8px 0; color: #555; font-size: 14px; line-height: 1.4;">${county.description.substring(0, 120)}...</p>
              <div style="margin-top: 10px;">
                <button onclick="window.showCountyDetails('${county.id}')" 
                        style="background: ${county.color}; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
                  View Details
                </button>
              </div>
            </div>
          `
        });

        // Add click listeners
        marker.addListener('click', () => {
          infoWindow.open(newMap, marker);
        });

        marker.addListener('mouseover', () => {
          marker.setIcon({
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 20,
            fillColor: county.color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 4,
            strokeOpacity: 1
          });
        });

        marker.addListener('mouseout', () => {
          marker.setIcon({
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: county.color,
            fillOpacity: 0.9,
            strokeColor: '#ffffff',
            strokeWeight: 3,
            strokeOpacity: 1
          });
        });
      });

      setIsLoaded(true);
    };

    // Global function to show county details
    window.showCountyDetails = (countyId: string) => {
      const county = counties.find(c => c.id === countyId);
      if (county) {
        setSelectedCounty(county);
      }
    };

    loadGoogleMaps();

    return () => {
      delete (window as any).initMap;
      delete (window as any).showCountyDetails;
    };
  }, []);

  const closeModal = () => {
    setSelectedCounty(null);
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-dark-grey mb-2">BlueBiz Coastal Presence</h3>
          <p className="text-sm text-dark-grey/70 mb-3">Interactive heatmap showing our operations</p>
          <div className="flex items-center space-x-2 text-xs text-dark-grey/60">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></div>
            <span>Activity Intensity</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-orange">6</div>
            <div className="text-xs text-dark-grey/70">Counties</div>
          </div>
        </div>

        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 z-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-dark-grey font-medium">Loading Interactive Map...</p>
            </div>
          </div>
        )}

        <div ref={mapRef} className="w-full h-96 md:h-[500px] lg:h-[600px]" />

        {/* Legend */}
        <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
          <h4 className="text-sm font-bold text-dark-grey mb-3">Counties</h4>
          <div className="grid grid-cols-2 gap-2">
            {counties.map((county) => (
              <div key={county.id} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: county.color }}
                ></div>
                <span className="text-xs text-dark-grey font-medium">{county.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedCounty && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedCounty.image}
                alt={selectedCounty.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{selectedCounty.name} County</h3>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {selectedCounty.population} people
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    {selectedCounty.businesses}+ businesses
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-gold/10 rounded-xl p-6 text-center border border-primary-orange/20">
                  <div className="text-2xl font-bold text-primary-orange mb-1">{selectedCounty.stats.entrepreneurs}</div>
                  <div className="text-sm text-dark-grey/70">Entrepreneurs Supported</div>
                </div>
                <div className="bg-gradient-to-br from-teal/10 to-program-green/10 rounded-xl p-6 text-center border border-teal/20">
                  <div className="text-2xl font-bold text-teal mb-1">{selectedCounty.stats.jobsCreated}</div>
                  <div className="text-sm text-dark-grey/70">Jobs Created</div>
                </div>
                <div className="bg-gradient-to-br from-green/10 to-program-green/10 rounded-xl p-6 text-center border border-green/20">
                  <div className="text-2xl font-bold text-green mb-1">{selectedCounty.stats.fundingDeployed}</div>
                  <div className="text-sm text-dark-grey/70">Funding Deployed</div>
                </div>
              </div>

              <p className="text-dark-grey/70 mb-8 leading-relaxed text-lg">{selectedCounty.description}</p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark-grey mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary-orange" />
                  Key Economic Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCounty.highlights.map((highlight: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-light-grey rounded-xl">
                      <TrendingUp className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                      <span className="text-dark-grey/80 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              {/* <div className="bg-gradient-to-br from-light-grey to-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-dark-grey mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-orange" />
                  Contact Our {selectedCounty.name} Office
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-orange" />
                      <span className="text-dark-grey/70">{selectedCounty.office}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-orange" />
                      <a href={`tel:${selectedCounty.contact}`} className="text-dark-grey/70 hover:text-primary-orange transition-colors">
                        {selectedCounty.contact}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-orange" />
                      <a href={`mailto:${selectedCounty.email}`} className="text-dark-grey/70 hover:text-primary-orange transition-colors">
                        {selectedCounty.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <a
                      href={`tel:${selectedCounty.contact}`}
                      className="flex items-center justify-center px-6 py-3 bg-primary-orange text-white rounded-xl font-semibold hover:bg-secondary-gold transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Office
                    </a>
                    <a
                      href={`mailto:${selectedCounty.email}`}
                      className="flex items-center justify-center px-6 py-3 bg-teal text-white rounded-xl font-semibold hover:bg-program-green transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapsHeatmap;