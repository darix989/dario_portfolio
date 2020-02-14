import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

// export const StyledContent = styled(Content)`
//   min-height: 100vh;
//   @media (max-width: 640px) {
//     margin-left: 0 !important;
//   }
// `

export const StyledContent = styled.div`
  margin-left: 16rem;
  min-height: 100vh;
  background: #393939;
  padding: 2rem;
  will-change: margin-left;
`