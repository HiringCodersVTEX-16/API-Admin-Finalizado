import React, { FC, useEffect, useState } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'

const AdminExample: FC = () => {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetch('https://9omhprzx4i.execute-api.sa-east-1.amazonaws.com/leads').then(
      (response) => {
        response.json().then((dataAWS) => {
          setLeads(dataAWS.Items)
        })
      }
    )
  }, [])

  const defaultSchema = {
    properties: {
      nome: {
        title: 'Nome',
        width: 300,
      },
      email: {
        title: 'Email',
        minWidth: 350,
      },
      telefone: {
        title: 'Telefone',
        // default is 200px
        minWidth: 100,
      },
      id: {
        title: 'ID',
        minwidth: 250,
      },
      cliente: {
        title: 'Cliente',
        minWidth: 100,
      },
    },
  }

  return (
    <Layout>
      <PageBlock title="Desafio" subtitle="Leads Cadastrados." variation="full">
        <h1>Leads Cadastrados</h1>

        <Table fullWidth schema={defaultSchema} items={leads} density="high" />
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
