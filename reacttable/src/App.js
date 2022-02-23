import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">
            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1>Murugan Associates </h1>
                  <p>Kotak Life insurance<br /> <a href="#" class="text-reset">Product list-Pricelist</a></p>
                </div>
              </div>
            </header>
           
            <div class="row text-center align-items-end">
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h2 text-uppercase font-weight-bold mb-4">Kotak SmartLife Plan</h1>
                  <h2 class="h6 font-weight-bold">Premium Payment Mode<span class="text-small font-weight-normal ml-2">/ Yearly
</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Basic Sum Assured:  ₹10,87,905</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Amount of Installment Premium: ₹1,00,000</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Premium Payment Term(in years): 12</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      Option for Bonus: Paid–Up Addition
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      Policy Term(in years): 45
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      A Limited Pay Non-Linked Participating Life Insurance plan
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h2 text-uppercase font-weight-bold mb-4">Kotak Premier Endowment Plan</h1>
                  <h2 class="h6 font-weight-bold">Premium Payment Mode<span class="text-small font-weight-normal ml-2">/ year</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Basic Sum Assured: ₹13,96,453</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Amount of Installment Premium: ₹1,00,000</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Policy Term(in years) :20</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Premium Payment Term(in years): 15
</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Age of Life Insured(in years): 30
</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      Non Linked Participating Endowment Plan
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h2 text-uppercase font-weight-bold mb-4">Kotak Premier MoneyBack Plan</h1>
                  <h2 class="h6 font-weight-bold">Survival
Benefits<span class="text-small font-weight-normal ml-2">/5 years</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Base Premium(Yearly): ₹1,00,000</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Total Yearly Premium(incl. GST & Cess): ₹1,04,500</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Basic Sum Assured :₹10,22,600</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Age of Life Insured(in years): 30</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Policy Term(in years): 24</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Kotak Premier Moneyback Plan
A Savings cum Insurance Plan</li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
     
      
)
};
}
export default Home;