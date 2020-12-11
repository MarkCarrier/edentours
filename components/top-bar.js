import Link from 'next/link'

export default function TopBar(props) {
  return (
    <div className="w-full border-b flex flex-row flex-wrap items-center p-1 font-serif">
      <div className="flex-grow p-3 md:pl-20 pl-4 text-xl font-extrabold">
        <img
          className="inline-block"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI3NC4xNTU0MTgiIGlkPSJzdmc4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNS4wODcxNjYgMTkuNjIwMjg4IiB3aWR0aD0iNTcuMDIyMzYyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczIiPjxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMjMiPjxyZWN0IGhlaWdodD0iMTcwLjAwNzExIiBpZD0icmVjdDI1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuOTc2NDE1MTIiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgd2lkdGg9IjI2My44NDYxNiIgeD0iNi43ODQ3ODc3IiB5PSIxMTAuMzYxOTQiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC41MTEwMDYsLTM4Mi4wMDEzMykiPjxyZWN0IGhlaWdodD0iNTguMTg0MjYxIiBpZD0icmVjdDgwMTEiIHJ5PSIxLjE0MzM1NzIiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjEwNjk5OTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHdpZHRoPSIxNTAuMTE3NjEiIHg9Ii0zNzcuMjIwMjEiIHk9Ii0xOTguOTA0NzciLz48L2c+PGcgaWQ9Imc4NjgxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC41MTEwMDYsLTM4Mi4wMDEzMykiPjxyZWN0IGhlaWdodD0iNTguMTg0MjYxIiBpZD0icmVjdDg2NzciIHJ5PSIxLjE0MzM1NzIiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjEwNjk5OTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHdpZHRoPSIxNTAuMTE3NjEiIHg9Ii0zNzcuMjIwMjEiIHk9Ii0xOTguOTA0NzciLz48L2c+PGcgaWQ9Imc5MjMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC41MTEwMDYsLTM4Mi4wMDEzMykiPjxyZWN0IGhlaWdodD0iNTguMTg0MjYxIiBpZD0icmVjdDkyMjkiIHJ5PSIxLjE0MzM1NzIiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjEwNjk5OTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHdpZHRoPSIxNTAuMTE3NjEiIHg9Ii0zNzcuMjIwMjEiIHk9Ii0xOTguOTA0NzciLz48cmVjdCBoZWlnaHQ9IjM2OC44MzE5NCIgaWQ9InJlY3Q5MzExIiByeT0iMS4xNDMzNTcyIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS4xMDY5OTk5OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB3aWR0aD0iMzEzLjIzOTkiIHg9Ii01OTQuMzg5ODMiIHk9Ii0xNjEuNjM0NDkiLz48ZWxsaXBzZSBjeD0iLTE0Ljg2NzMzMiIgY3k9IjM5Mi4xOTU3MSIgaWQ9InBhdGg0NzI5IiByeD0iMy4wMjQyNTg5IiByeT0iMi44MDYyOTQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMmNhMDJjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMjQxZjFjO3N0cm9rZS13aWR0aDoxLjAxODIzMjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPjxwYXRoIGQ9Im0gLTEzLjI4MTQ5OCw0MDAuODA0OCAtMC4wNDI5NywtMTIuMTEwOTMgMS40MTI0MTQsLTEuNGUtNCAwLjA4MjY5LDEyLjEwMDY4IHoiIGlkPSJwYXRoOTc5LTgtNi02LTgtNS03IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6Izc4NDQyMTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzI0MWYxYztzdHJva2Utd2lkdGg6MC43MzQ3NDkyNjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+PGVsbGlwc2UgY3g9Ii0xNS45NDgyMzYiIGN5PSIzODguMDI0NzgiIGlkPSJwYXRoNDcyOS03IiByeD0iNC4wNTM2NTMyIiByeT0iMy43NjE0OTg1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzM3YzgzNztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzI0MWYxYztzdHJva2Utd2lkdGg6MS4wMTgyMzI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiLz48ZWxsaXBzZSBjeD0iLTExLjI3Mzc1NSIgY3k9IjM4Ni4yNzE5NCIgaWQ9InBhdGg0NzI5LTctNyIgcng9IjQuMDUzNjUzMiIgcnk9IjMuNzYxNDk4NSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM1ZmQzNWY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMyNDFmMWM7c3Ryb2tlLXdpZHRoOjEuMDE4MjMyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+PGVsbGlwc2UgY3g9Ii0xMi42MzU3MTUiIGN5PSI0MDEuMzEwNTIiIGlkPSJwYXRoOTgxLTctMC02LTUtMCIgcng9IjMuODc3NDA5IiByeT0iMC4zMTEwOTg1NSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNiM2IzYjM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNzk3MDc3NjY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPjxwYXRoIGQ9Im0gLTE0LjkzMTE5OCw0MDAuOTUyMDQgaCA0LjcwMDEzMyIgaWQ9InBhdGg5NzctOC01LTgtMi0wIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzI0MWYxYztzdHJva2Utd2lkdGg6MC41MTk4MTAzODtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+PHBhdGggZD0ibSAtMTEuNjM2NjQyLDM5Ni4zNTYwOSBjIDAsMCAzLjQyOTU2MTYsMC4zNzAxMyAyLjg5NTAxOTYsLTIuMzgzMTUiIGlkPSJwYXRoOTcyLTg1LTEtNy00LTkiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMjQxZjFjO3N0cm9rZS13aWR0aDowLjAwMjk1NTI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiLz48ZWxsaXBzZSBjeD0iLTguODU3NTk2NCIgY3k9IjM5MS4zNzMzNSIgaWQ9InBhdGg0NzI5LTctNy03IiByeD0iMi45MjQ2NDA3IiByeT0iMi43MTM4NTU1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzM3YzgzNztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzI0MWYxYztzdHJva2Utd2lkdGg6MS4wMTgyMzI3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiLz48cGF0aCBkPSJtIC0xMS42MzY2NDIsMzk2LjM1NjA5IGMgMCwwIDMuNDI5NTYxNiwwLjM3MDEzIDIuODk1MDE5NiwtMi4zODMxNSIgaWQ9InBhdGg4MjAzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzI0MWYxYztzdHJva2Utd2lkdGg6MC4wMDI5NTUyNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+PHBhdGggZD0ibSAtMTEuNjM2NjQyLDM5Ni4zNTYwOSBjIDAsMCAzLjQyOTU2MTYsMC4zNzAxMyAyLjg5NTAxOTYsLTIuMzgzMTUiIGlkPSJwYXRoODc1NSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMyNDFmMWM7c3Ryb2tlLXdpZHRoOjAuMDAyOTU1MjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPjwvZz48L3N2Zz4="
        />
        <span className="ml-2">Eden•Tours</span>
      </div>
      <div className="mr-10 font-serif">
        <ul className="flex flex-row flex-wrap">
          <li className="mx-3">
            <Link href="/">The Tours</Link>
          </li>
          <li className="mx-3">
            <Link href="/the-land">The Land</Link>
          </li>
          <li className="mx-3">
            <Link href="/more">Questions</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
