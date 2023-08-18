package colour

import (
	"math/rand"
	"time"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

var symbols = []rune("abcdef0123456789")

func randSeq(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = symbols[rand.Intn(len(symbols))]
	}
	return string(b)
}

func RandomColour() string {
	return randSeq(6)
}
