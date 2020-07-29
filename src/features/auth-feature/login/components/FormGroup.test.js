import React from 'react'
import FormGroup from "./FormGroup"
import { shallow } from "enzyme"

afterEach(cleanup)

describe('<FormGroup/>', () => {

    const component = shallow(<FormGroup />)

    test("FormGroup gives output after user input", () => {
        component.setProps({ istrue: true })
        expect(component.find('[data-testid]="input"').type()).isEqual("text")
    })

})

