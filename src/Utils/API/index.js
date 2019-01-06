export const fetchQuestions = async (amount, category, difficulty, type) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
  const response = await fetch(url, {
    method: "GET"
  })
  const result = await response.json()
  console.log(result)
  return result
}
