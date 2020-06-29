import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function App() {
  const modalizeRef = useRef(null);

  function onOpen() {
    // (?) não gera erro
    modalizeRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ onOpen }>
        <Text style={{ fontSize: 26 }}>ABRIR MODAL</Text>
      </TouchableOpacity>

      <Modalize
        ref={ modalizeRef }

        // tamanho inicial do modal
        snapPoint={180}

        // tamanho máximo do modal
        // modalHeight={180}

        // HeaderComponent={
        //   <View style={{ width: '100%', height: 50 }}>
        //     <Text>Modal Header</Text>
        //   </View>
        // }
      >
        {/* componentização futura */}
        <View style={{
          flex: 1,
          height: 180,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#29AE39'}]}>
            <Text>EDITAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#FF0022'}]}>
            <Text>EXCLUIR</Text>
          </TouchableOpacity>

        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8
  }
});
