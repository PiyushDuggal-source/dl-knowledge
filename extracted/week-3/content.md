
## CS6910: Fundamentals of Deep Learning


## Lecture 4: Feedforward Neural Networks, Backpropagation


## Mitesh M. Khapra


![Figure 1](artifacts/images/figure_1.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## References/Acknowledgments

See the excellent videos by Hugo Larochelle on Backpropagation and Andrej Karpathy Lecture (CS231n Winter 2016) on Bckpropagation, Neural Networks
Module 4.1: Feedforward Neural Networks (a.k.a. multilayered network of neurons)
Mitesh M. Khapra

![Figure 2](artifacts/images/figure_2.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

![Figure 3](artifacts/images/figure_3.png)

The input to the network is an -dimensional vector n
The network contains hidden layers (2, in this case) having neurons each L-1 n
Finally, there is one output layer containing neurons (say, corresponding to classes) k k and activation and are vectors) a i h i Each neuron in the hidden layer and output layer can be split into two parts : pre-activation and activation ( and are vectors) a i h i pre-activation ( and are vectors) a i h i
The input layer can be called the -th layer and the output layer can be called the ( )-th layer 0 L
and are the weight and bias between layers and ) W ∈ i R n × n b ∈ i R n i -1 i (0 < i < L
and are the weight and bias between the last hidden layer and the output layer   ( ) in this case) W ∈ L R k × n b ∈ L R k L = 3

![Figure 4](artifacts/images/figure_4.png)

The pre-activation at layer   is given by i

![formula_1](artifacts/formulas/formula_1.png)

The activation at layer   is given by i

![formula_2](artifacts/formulas/formula_2.png)

where is called the activation function (for example, logistic, tanh, linear, etc.) g
The activation at the output layer is given by

![formula_3](artifacts/formulas/formula_3.png)

where is the output activation function (for example, softmax, linear, etc.) O
To simplify notation we will refer to as and as a ( x ) i a i h ( x ) i h i

![Figure 5](artifacts/images/figure_5.png)

The pre-activation at layer   is given by i

![formula_4](artifacts/formulas/formula_4.png)

The activation at layer   is given by i

![formula_5](artifacts/formulas/formula_5.png)

where is called the activation function (for example, logistic, tanh, linear, etc.) g
The activation at the output layer is given by

![formula_6](artifacts/formulas/formula_6.png)

where is the output activation function (for example, softmax, linear, etc.) O

![Figure 6](artifacts/images/figure_6.png)


![formula_7](artifacts/formulas/formula_7.png)


## Model:


![formula_8](artifacts/formulas/formula_8.png)


## Parameters:


![formula_9](artifacts/formulas/formula_9.png)

Algorithm: Gradient Descent with Backpropagation (we will see soon)
Objective/Loss/Error function: Say,

![formula_10](artifacts/formulas/formula_10.png)

In general, min L ( θ )
where is some function of the parameters L ( θ )
Module 4.2: Learning Parameters of Feedforward Neural Networks (Intuition)
Mitesh M. Khapra

![Figure 7](artifacts/images/figure_7.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## The story so far...

We have introduced feedforward neural networks
We are now interested in finding an algorithm for learning the parameters of this model

![Figure 8](artifacts/images/figure_8.png)


## Recall our gradient descent algorithm We can write it more concisely as


## Algorithm: gradient_descent()

w ← t +1 w -t η ∇ wt b ← t +1 b -t η ∇ b t t ←0; max _ iterations ←1000; end while ++ do t < max _ iterations Initialize w , b ; 0 0

![Figure 9](artifacts/images/figure_9.png)


## Recall our gradient descent algorithm We can write it more concisely as


## Algorithm: gradient_descent()


![formula_11](artifacts/formulas/formula_11.png)

max _ iterations ←1000;
Initialize
θ
0 = [
w
,
b
];
0
0
while ++ do t < max _ iterations

![formula_12](artifacts/formulas/formula_12.png)


## end


![formula_13](artifacts/formulas/formula_13.png)

Now, in this feedforward neural network, instead of we have θ = [ w , b ] θ =

![formula_14](artifacts/formulas/formula_14.png)

We can still use the same algorithm for learning the parameters of our model

![Figure 10](artifacts/images/figure_10.png)


## Recall our gradient descent algorithm We can write it more concisely as


## Algorithm: gradient_descent()

t ←0; max _ iterations ←1000; Initialize θ 0 = [ W , ..., W , b , ..., b ]; 1 0 L 0 1 0 L 0 end while ++ do t < max _ iterations θ ← t +1 θ -t η ∇ θ t
Now, in this feedforward neural network, instead of we have θ = [ w , b ] θ = [ W , ..., W , b , b , ..., b ] 1 L 1 2 L where ∇ θ = t [ , ., , , ., ] ∂ W 1, t ∂ L ( θ ) ∂ WL , t ∂ L ( θ ) ∂ b 1, t ∂ L ( θ ) ∂ b L , t ∂ L ( θ ) T
We can still use the same algorithm for learning the parameters of our model 12
⎡

## Except that now our looks much more nasty ∇ θ


| ∂ W 111 ∂ L ( θ )   | ...   | ∂ W 11 n ∂ L ( θ )   | ∂ W 211 ∂ L ( θ )   | ...   | ∂ W 21 n ∂ L ( θ )   | ∂ W L ,11 ∂ L ( θ )   | ∂ W L ,1 k ∂ L ( θ )   | ∂ b 11 ∂ L ( θ )   | ∂ b L 1 ∂ L ( θ )   |
|---------------------|-------|----------------------|---------------------|-------|----------------------|-----------------------|------------------------|--------------------|---------------------|
| ∂ L ( θ )           | ...   | ∂ W 11 n ∂ L ( θ )   | ∂ W 211 ∂ L ( θ )   | ...   | ∂ L ( θ )            | ∂ L ( θ )             | ∂ L ( θ )              | L ( θ              | L (                 |
|                     | ...   | ∂ L ( θ )            | ∂ L ( θ )           | ...   | ∂ W 21 n ∂ L ( θ )   | ∂ W L ,11 ∂ L ( θ )   | ∂ W L ,1 k ∂ L ( θ )   | ∂ b 11 ∂ L ( θ )   | ∂ b L 1 ∂ L ( θ )   |
| ∂ W 121             |       | ∂ W 12 n             | ∂ W 221             | ...   | ∂ W 22 n             | ∂ W L ,21             | ∂ W L ,2 k             | ∂ b 12             | b L                 |
| ⋮                   | ⋮     | ⋮                    | ⋮                   | ⋮     | ⋮                    | ⋮                     | ⋮                      | ⋮                  | ⋮                   |
|                     |       |                      |                     |       |                      |                       | ∂ W L , nk             | ∂ b 1 n            | b Lk                |
| ∂ L ( θ )           | ...   | ∂ L ( θ )            | ∂ L ( θ )           | ...   | ∂ L ( θ )            | ∂ L ( θ )             | ∂ L ( θ )              | ∂ L ( θ )          | ∂ L ( θ )           |
| ∂ W 1 n 1           |       | ∂ W 1 nn             | ∂ W 2 n 1           |       | ∂ W 2 nn             | ∂ W L , n 1           |                        |                    | ∂ L ( θ )           |

> 📊 [Table 1 CSV](artifacts/tables/table_1.csv) | [Table 1 HTML](artifacts/tables/table_1.html)

is thus composed of ∇ θ

![formula_15](artifacts/formulas/formula_15.png)


![formula_16](artifacts/formulas/formula_16.png)

⎤

## We need to answer two questions

How to choose the loss function L ( θ )?
How to compute which is composed of ∇ θ
∇ W , ∇ W , ..., ∇ W ∈ 1 2 L -1 R , ∇ W ∈ n × n L R , k × n
b
∇
b
, ∇
b
, ..., ∇
∈
n
R
b
, ∇
∈
k
R
?
1
2
L
-1
L

## Module 4.3: Output Functions and Loss Functions

Mitesh M. Khapra

![Figure 11](artifacts/images/figure_11.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## We need to answer two questions

How to choose the loss function L ( θ )?
How to compute which is composed of ∇ θ
∇ W , ∇ W , ..., ∇ W ∈ 1 2 L -1 R , ∇ W ∈ n × n L R k × n
∇ b , ∇ b , ..., ∇ b ∈ 1 2 L -1 R , ∇ b ∈ n L R k
, ?

## We need to answer two questions

How to choose the loss function L ( θ )?
How to compute which is composed of ∇ θ
∇ W , ∇ W , ..., ∇ W ∈ 1 2 L -1 R , ∇ W ∈ n × n L R k × n
∇ b , ∇ b , ..., ∇ b ∈ 1 2 L -1 R , ∇ b ∈ n L R k
, ?
isActor
Damon
isDirector
Nolan
.  .
.   .   .   .   .   .

![Figure 12](artifacts/images/figure_12.png)

The choice of loss function depends on the problem at hand
We will illustrate this with the help of two examples
Consider our movie example again but this time we are interested in predicting ratings
Here y ∈ j R 3
The loss function should capture how much deviates from y ^ j y j
If then the squared error loss can capture this deviation y ∈ j R k

![formula_17](artifacts/formulas/formula_17.png)


![Figure 13](artifacts/images/figure_13.png)

A related question: What should the output function ' ' be if ? O y ∈ j R
More specifically, can it be the logistic function?
No, because it restricts to a value between & but we want y ^ j 0 1 ∈ y ^ j R
So, in such cases it makes sense to have ' ' as linear function O

![formula_18](artifacts/formulas/formula_18.png)


![formula_19](artifacts/formulas/formula_19.png)

is no longer bounded between and = y ^ j ( X ) f ^ i 0 1
Watch this lecture on Information and Entropy here

![Figure 14](artifacts/images/figure_14.png)

Now let us consider another problem for which a different loss function would be appropriate
Suppose we want to classify an image into 1 of classes k
Here again we could use the squared error loss to capture the deviation
But can you think of a better function?

![Figure 15](artifacts/images/figure_15.png)

Notice that is a probability distribution y
Therefore we should also ensure that is a probability distribution y ^
1
1

![Figure 16](artifacts/images/figure_16.png)

Notice that is a probability distribution y
Therefore we should also ensure that is a probability distribution y ^
What choice of the output activation ' ' will ensure this ? O

![formula_20](artifacts/formulas/formula_20.png)


![formula_21](artifacts/formulas/formula_21.png)

is the element of and is the element of the vector . O ( a ) L j j th y ^ a L , j j th a L
This function is called the function softmax

![Figure 17](artifacts/images/figure_17.png)

Now that we have ensured that both & are probability distributions can you think of a function which captures the difference between them? y y ^
Cross-entropy

![formula_22](artifacts/formulas/formula_22.png)

Notice that
(the true class label) y = c 1  if c = ℓ
= 0  otherwise

![formula_23](artifacts/formulas/formula_23.png)


![formula_24](artifacts/formulas/formula_24.png)


![Figure 18](artifacts/images/figure_18.png)

1
So, for classification problem (where you have to choose of classes), we use the following objective function 1 K

![formula_25](artifacts/formulas/formula_25.png)


![formula_26](artifacts/formulas/formula_26.png)


## But wait!

Is a function of y ^ ℓ θ = [ W , W , ., W , b , b , ., b ]? 1 2 L 1 2 L
Yes, it is indeed a function of θ

![formula_27](artifacts/formulas/formula_27.png)

What does encode? y ^ ℓ
It is the probability that belongs to the class (bring it as close to ). x ℓ th 1
is called the of the data. log y ^ ℓ log -likelihood

|                   | Outputs       | Outputs       |
|-------------------|---------------|---------------|
|                   | Real Values   | Probabilities |
| Output Activation | Linear        | Softmax       |
| Loss Function     | Squared Error | Cross Entropy |

> 📊 [Table 2 CSV](artifacts/tables/table_2.csv) | [Table 2 HTML](artifacts/tables/table_2.html)

Of course, there could be other loss functions depending on the problem at hand but the two loss functions that we just saw are encountered very often

|                   | Outputs       | Outputs       |
|-------------------|---------------|---------------|
|                   | Real Values   | Probabilities |
| Output Activation | Linear        | Softmax       |
| Loss Function     | Squared Error | Cross Entropy |

> 📊 [Table 3 CSV](artifacts/tables/table_3.csv) | [Table 3 HTML](artifacts/tables/table_3.html)

Of course, there could be other loss functions depending on the problem at hand but the two loss functions that we just saw are encountered very often
For the rest of this lecture we will focus on the case where the output activation is a softmax function and the loss function is cross entropy

## Module 4.4: Backpropagation (Intuition)

Mitesh M. Khapra

![Figure 19](artifacts/images/figure_19.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## We need to answer two questions

How to choose the loss function L ( θ )?
How to compute which is composed of ∇ θ
∇ W , ∇ W , ..., ∇ W ∈ 1 2 L -1 R , ∇ W ∈ n × n L R , n × k ∇ b , ∇ b , ..., ∇ b ∈ 1 2 L -1 R , ∇ b ∈ n L R ? k
Let us focus on this one weight ( ). W 112
To learn this weight using SGD we need a formula for . ∂ W 112 ∂ L ( θ )
We will see how to calculate this.

![Figure 20](artifacts/images/figure_20.png)

First let us take the simple case when we have a deep but thin network.
In this case it is easy to find the derivative by chain rule.

![formula_28](artifacts/formulas/formula_28.png)

x

![Figure 21](artifacts/images/figure_21.png)

)
First let us take the simple case when we have a deep but thin network.
In this case it is easy to find the derivative by chain rule.

![formula_29](artifacts/formulas/formula_29.png)

x

![Figure 22](artifacts/images/figure_22.png)

)
Let us see an intuitive explanation of backpropagation before we get into the mathematical details
We get a certain loss at the output and we try to figure out who is responsible for this loss

![Figure 23](artifacts/images/figure_23.png)

- We  get  a  certain  loss  at  the  output  and  we  try  to figure out who is responsible for this loss
- So, we talk to the output layer and say "Hey! You are not producing the desired output, better take responsibility".

![Figure 24](artifacts/images/figure_24.png)

We get a certain loss at the output and we try to figure out who is responsible for this loss
So, we talk to the output layer and say "Hey! You are not producing the desired output, better take responsibility".
The output layer says "Well, I take responsibility for my part but please understand that I am only as good as the hidden layer and weights below me". After all.

![formula_30](artifacts/formulas/formula_30.png)


![Figure 25](artifacts/images/figure_25.png)

So, we talk to and and ask them "What is wrong with you?" W , b L L h L
1

![Figure 26](artifacts/images/figure_26.png)

- So, we talk to and and ask them "What is wrong with you?" W , b L L h L
and take full responsibility but says "Well, please understand that I am only as good as the preactivation layer" WL b L h L

![Figure 27](artifacts/images/figure_27.png)

- So, we talk to and and ask them "What is wrong with you?" W , b L L h L
- and take full responsibility but says "Well, please understand that I am only as good as the preactivation layer" WL b L h L
- The pre-activation layer in turn says that I am only as good as the hidden layer and weights below me.

![Figure 28](artifacts/images/figure_28.png)

- So, we talk to and and ask them "What is wrong with you?" W , b L L h L
- and take full responsibility but says "Well, please understand that I am only as good as the preactivation layer" WL b L h L
- The pre-activation layer in turn says that I am only as good as the hidden layer and weights below me.
- We continue in this manner and realize that the responsibility lies with all the weights and biases (i.e. all the parameters of the model)

![Figure 29](artifacts/images/figure_29.png)

So, we talk to and and ask them "What is wrong with you?" W , b L L h L
and take full responsibility but says "Well, please understand that I am only as good as the preactivation layer" WL b L h L
The pre-activation layer in turn says that I am only as good as the hidden layer and weights below me.
We continue in this manner and realize that the responsibility lies with all the weights and biases (i.e. all the parameters of the model)
But instead of talking to them directly, it is easier to talk to them through the hidden layers and output layers (and this is exactly what the chain rule allows us to do)

![Figure 30](artifacts/images/figure_30.png)


![Figure 31](artifacts/images/figure_31.png)


## Quantities of interest (roadmap for the remaining part):

Gradient w.r.t. output units
Gradient w.r.t. hidden units
Gradient w.r.t. weights and biases

![formula_31](artifacts/formulas/formula_31.png)

Our focus is on and output. Cross entropy loss Softmax

## Module 4.5: Backpropagation: Computing Gradients w.r.t. the Output Units

Mitesh M. Khapra

![Figure 32](artifacts/images/figure_32.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras
Quantities of interest (roadmap for the remaining part):
Gradient w.r.t. output units
Gradient w.r.t. hidden units
Gradient w.r.t. weights and biases

![formula_32](artifacts/formulas/formula_32.png)

Our focus is on and output. Cross entropy loss Softmax
Let us first consider the partial derivative w.r.t.  -th output i

![formula_33](artifacts/formulas/formula_33.png)

More Compactly,

![formula_34](artifacts/formulas/formula_34.png)

1

![Figure 33](artifacts/images/figure_33.png)


![formula_35](artifacts/formulas/formula_35.png)

We can now talk about the gradient w.r.t. the vector y ^

![formula_36](artifacts/formulas/formula_36.png)

⎤

![formula_37](artifacts/formulas/formula_37.png)


![formula_38](artifacts/formulas/formula_38.png)

where is a k-dimensional vector e (ℓ)
whose  -th element is and all other elements are . l 1 0

![Figure 34](artifacts/images/figure_34.png)


## What we are actually interested in is


![formula_39](artifacts/formulas/formula_39.png)


![formula_40](artifacts/formulas/formula_40.png)

Does depend on y ^ ℓ a ? Li Indeed, it does.

![formula_41](artifacts/formulas/formula_41.png)

Having established this, we will now derive the full expression on the next slide

![Figure 35](artifacts/images/figure_35.png)


![formula_42](artifacts/formulas/formula_42.png)

So far we have derived the partial  derivative w.r.t.
the  -th element of i a L

![formula_43](artifacts/formulas/formula_43.png)

We can now write the gradient w.r.t. the vector a L

![formula_44](artifacts/formulas/formula_44.png)


![formula_45](artifacts/formulas/formula_45.png)

1

![Figure 36](artifacts/images/figure_36.png)


## Module 4.6: Backpropagation: Computing Gradients w.r.t. Hidden Units

Mitesh M. Khapra

![Figure 37](artifacts/images/figure_37.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## Quantities of interest (roadmap for the remaining part):

Gradient w.r.t. output units
Gradient w.r.t. hidden units
Gradient w.r.t. weights and biases

![formula_46](artifacts/formulas/formula_46.png)

∂ h 2 ∂ a 3 ∂ a 2 ∂ h 2 Talk to the previous hidden layer
∂ h 1 ∂ a 2 ∂ a 1 ∂ h 1 Talk to the previous hidden layer
Our focus is on and output. Cross entropy loss Softmax
∂ W 111 ∂ a 1 and now talk to the weights
Chain rule along multiple paths: If a function can be written as a function of intermediate results then we have : p ( z ) q ( z ) i

![formula_47](artifacts/formulas/formula_47.png)

In our case:
is the loss function p ( z ) L ( θ )

![formula_48](artifacts/formulas/formula_48.png)


![formula_49](artifacts/formulas/formula_49.png)

1

![Figure 38](artifacts/images/figure_38.png)


![formula_50](artifacts/formulas/formula_50.png)


![formula_51](artifacts/formulas/formula_51.png)

Now consider these two vectors,

![formula_52](artifacts/formulas/formula_52.png)

is the -th column of W = i +1, ⋅ , j j W ; i +1 see that,

![formula_53](artifacts/formulas/formula_53.png)


![Figure 39](artifacts/images/figure_39.png)


![formula_54](artifacts/formulas/formula_54.png)


![formula_55](artifacts/formulas/formula_55.png)

We can now write the gradient w.r.t. h i

![formula_56](artifacts/formulas/formula_56.png)

We are almost done except that we do not know how to calculate for ∇ a L ( θ ) i +1 i < L -1
We will see how to compute that

![Figure 40](artifacts/images/figure_40.png)


![formula_57](artifacts/formulas/formula_57.png)


![formula_58](artifacts/formulas/formula_58.png)


![formula_59](artifacts/formulas/formula_59.png)


![formula_60](artifacts/formulas/formula_60.png)


![formula_61](artifacts/formulas/formula_61.png)


![formula_62](artifacts/formulas/formula_62.png)


![Figure 41](artifacts/images/figure_41.png)


## Module 4.7: Backpropagation: Computing Gradients w.r.t. Parameters

Mitesh M. Khapra

![Figure 42](artifacts/images/figure_42.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras

## Quantities of interest (roadmap for the remaining part):

Gradient w.r.t. output units
Gradient w.r.t. hidden units

## Gradient w.r.t. weights and biases


![formula_63](artifacts/formulas/formula_63.png)

∂ h 1 ∂ a 2 ∂ a 1 ∂ h 1 Talk to the previous hidden layer
Our focus is on and output. Cross entropy loss Softmax
∂ W 111 ∂ a 1 and now talk to the weights
Recall that,
1

![Figure 43](artifacts/images/figure_43.png)

Lets take a simple example of a W ∈ k R 3×3
and see what each entry looks like

![formula_64](artifacts/formulas/formula_64.png)


![formula_65](artifacts/formulas/formula_65.png)

Lets take a simple example of a W ∈ k R 3×3
and see what each entry looks like

![formula_66](artifacts/formulas/formula_66.png)


![formula_67](artifacts/formulas/formula_67.png)

Lets take a simple example of a W ∈ k R 3×3
and see what each entry looks like

![formula_68](artifacts/formulas/formula_68.png)


![formula_69](artifacts/formulas/formula_69.png)

Lets take a simple example of a W ∈ k R 3×3
and see what each entry looks like

![formula_70](artifacts/formulas/formula_70.png)


![formula_71](artifacts/formulas/formula_71.png)

Lets take a simple example of a W ∈ k R 3×3
and see what each entry looks like

![formula_72](artifacts/formulas/formula_72.png)


![formula_73](artifacts/formulas/formula_73.png)

Finally, coming to the biases

![formula_74](artifacts/formulas/formula_74.png)


![formula_75](artifacts/formulas/formula_75.png)

We can now write the gradient w.r.t. the vector b k

![formula_76](artifacts/formulas/formula_76.png)


![Figure 44](artifacts/images/figure_44.png)


## Module 4.8: Backpropagation: Pseudo code

Mitesh M. Khapra

![Figure 45](artifacts/images/figure_45.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras
Finally, we have all the pieces of the puzzle

![formula_77](artifacts/formulas/formula_77.png)

∇ L ( θ ), ∇ L ( θ ) h k a k (gradient w.r.t. hidden layers, ) 1 ≤ k < L
∇ L ( θ ), ∇ L ( θ ) Wk b k (gradient w.r.t. weights and biases, 1 ≤ k < L
We can now write the full learning algorithm

![formula_78](artifacts/formulas/formula_78.png)


## Algorithm: gradient_descent()

t ←0; max _ iterations ←1000; Initialize θ 0 = [ W , ..., W , b , ..., b ]; 1 0 L 0 1 0 L 0 end while ++ do t < max _ iterations θ ← t +1 θ -t η ∇ θ t _ a , h , a , h , ..., a , h , a , = 1 1 2 2 L -1 L -1 L y ^ forward propagation ( θ ) t _ ∇ θ = t backward propagation ( h , h , ..., h , a , a , ..., a , y , 1 2 L -1 1 2 L y ^
)

## Algorithm: forward_propagation( ) θ


![formula_79](artifacts/formulas/formula_79.png)

a
=
k
b
+
k
W h
h
k

## end


![formula_80](artifacts/formulas/formula_80.png)


![formula_81](artifacts/formulas/formula_81.png)

=
g
a
(
k
k
k
)
-1
;
Just do a forward propagation and compute all s, s, and h ' i a ' i y ^
Algorithm: back_propagation( ) h , h , ..., h , a , a , ..., a , y , 1 2 L -1 1 2 L y ^ end for to do k = L 1 ∇ L ( θ ) = a L -( e ( y ) -); y ^ // Compute output gradient ; // Compute gradients w.r.t. parameters ; ∇ L ( θ ) = Wk ∇ L ( θ ) h ; a k k -1 T ∇ L ( θ ) = b k ∇ L ( θ ); a k // Compute gradients w.r.t. layer below ; ∇ L ( θ ) = h k -1 W ∇ L ( θ ); k T a k // Compute gradients w.r.t. layer below (pre-activation) ; ∇ L ( θ ) = a k -1 ∇ L ( θ ) ⊙ h k -1 [..., g ( a ), ...]; ′ k -1, j

## Module 4.9: Derivative of the activation function


## Mitesh M. Khapra


![Figure 46](artifacts/images/figure_46.png)

AI4Bharat, Department of Computer Science and Engineering, IIT Madras
Now, the only thing we need to figure out is how to compute g ′

## Logistic function


![formula_82](artifacts/formulas/formula_82.png)


![formula_83](artifacts/formulas/formula_83.png)


![formula_84](artifacts/formulas/formula_84.png)


## tanh function


![formula_85](artifacts/formulas/formula_85.png)
