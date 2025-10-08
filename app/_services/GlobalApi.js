const { gql, default: request } = require("graphql-request")

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master'

// Request headers with authentication
const getRequestHeaders = () => {
  const headers = {};
  if (process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`;
  }
  return headers;
}

const getCategory = async () => {
  const query = gql`
    query Category {
        categories {
          bgcolor {
            hex
          }
          id
          name
          icon {
            url
          }
        }
      }
      `
  const result = await request(MASTER_URL, query, undefined, getRequestHeaders())
  return result
}

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
        businessLists {
          about
          address
          category {
            name
          }
          contactPerson
          email
          images {
            url
          }
          id
          name
        }
      }
      `
  const result = await request(MASTER_URL, query, undefined, getRequestHeaders())
  return result;

}

const getBusinessByCategory = async (category) => {
  const query = gql`
    query GetBusinessByCategory($category: String!) {
        businessLists(where: {category:
            {name: $category}}) {
          about
          address
          category {
            name
          }
          contactPerson
          email
          id
          name
          images {
            url
          }
        }
      }
      `
  const result = await request(MASTER_URL, query, { category }, getRequestHeaders())
  return result;
}

const getBusinessById = async (id) => {
  const query = gql`
  query GetBusinessById($id: ID!) {
    businessList(where: {id: $id}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query, { id }, getRequestHeaders())
  return result;
}

const createNewBooking = async (businessId, date, time, userEmail, userName) => {
  const mutationQuery = gql`
  mutation CreateBooking($businessId: ID!, $date: String!, $time: String!, $userEmail: String!, $userName: String!) {
    createBooking(
      data: {bookingStatus: booked,
        businessList: {connect: {id: $businessId}},
         date: $date, time: $time,
         userEmail: $userEmail,
          userName: $userName}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery, { businessId, date, time, userEmail, userName }, getRequestHeaders())
  return result;
}

const BusinessBookedSlot = async (businessId, date) => {
  const query = gql`
  query BusinessBookedSlot($businessId: ID!, $date: String!) {
    bookings(where: {businessList:
      {id: $businessId}, date: $date}) {
      date
      time
    }
  }
  `
  const result = await request(MASTER_URL, query, { businessId, date }, getRequestHeaders())
  return result;
}

const GetUserBookingHistory = async (userEmail) => {
  const query = gql`
  query GetUserBookingHistory($userEmail: String!) {
    bookings(where: {userEmail: $userEmail}
    orderBy: publishedAt_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `
  const result = await request(MASTER_URL, query, { userEmail }, getRequestHeaders())
  return result;

}


const deleteBooking = async (bookingId) => {
  const mutationQuery = gql`
  mutation DeleteBooking($bookingId: ID!) {
    deleteBooking(where: {id: $bookingId}) {
      id
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery, { bookingId }, getRequestHeaders())
  return result;

}

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking
}