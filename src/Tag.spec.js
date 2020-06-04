import React from 'react'
import { shallow } from 'enzyme'

import { Tag, TagMacro } from './Tag'

describe('Tag', () => {
  it('no macro - has the right color', () => {
    // test passes, no babel macro
    expect(shallow(<Tag />)).toHaveStyleRule('background-color', 'orange')
  })

  it('macro - has the right color', () => {
    // fail, with the babel macro
    expect(shallow(<TagMacro />)).toHaveStyleRule('background-color', 'orange')
  })

  it('macro - has the right color', () => {
    // test passes, with the work around
    function WrapperTag() {
      return <TagMacro />
    }
    expect(shallow(<WrapperTag />).find(TagMacro)).toHaveStyleRule('background-color', 'orange')
  })
})
