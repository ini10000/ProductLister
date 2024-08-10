import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  redText: {
    color: 'red'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  authText: {
    marginTop: 10,
    alignItems: 'center'
  },
  authButton: {
    top: 4,
    marginLeft: 4,
    color: 'green'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 12
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '60%'
  },
  cardPrice: {
    marginTop: 5,
    fontSize: 16,
    color: '#888',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
