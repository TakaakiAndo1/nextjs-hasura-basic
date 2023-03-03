import { VFC } from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a className="mb-3 py-1 px-3 text-white bg-stone-400 hover:bg-stone-500 rounded-md">
          Back
        </a>
      </Link>
    </>
  )
}
