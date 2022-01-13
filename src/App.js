import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <div class="flex">
        <Sidebar class="flex-initial w-32" />
        <div class="p-10">
          <div class="flex">
            <div class="card m-7">
              <p class="text-xl font-medium">Lorem Ipsum</p>
              <hr class="solid" />
              <div class="">
                <img
                  src="trend.png"
                  width="35%"
                  alt=""
                  class="float-right p-3"
                ></img>
                <p class="text-4xl font-semibold basis-2 pt-7">3600</p>
              </div>
            </div>

            <div class="card m-7">
              <p class="text-xl font-medium">De Finibus</p>
              <hr class="solid" />
              <div class="">
                <img
                  src="pie-chart.png"
                  width="35%"
                  alt=""
                  class="float-right p-3"
                ></img>
                <p class="text-4xl font-semibold basis-2 pt-7">45%</p>
              </div>
            </div>

            <div class="card m-7">
              <p class="text-xl font-medium">Labore Et</p>
              <hr class="solid" />
              <div class="">
                <img
                  src="bar-chart.png"
                  width="35%"
                  alt=""
                  class="float-right p-3"
                ></img>
                <p class="text-4xl font-semibold basis-2 pt-7">864</p>
              </div>
            </div>

            <div class="card m-7">
              <p class="text-xl font-medium">Dolor Sit</p>
              <hr class="solid" />
              <div class="">
                <img
                  src="profit.png"
                  width="35%"
                  alt=""
                  class="float-right p-3"
                ></img>
                <p class="text-4xl font-semibold basis-2 pt-7">--</p>
              </div>
            </div>
          </div>
          <hr class="solid" />
          <div class="p-2 flex">
            <table class="table-fixed w-50 card m-5">
              <thead class="bg-slate-400">
                <tr>
                  <th class="p-5 text-xl">Song</th>
                  <th class="p-5 text-xl">Artist</th>
                  <th class="p-5 text-xl">Year</th>
                </tr>
              </thead>
              <tbody class="text-center ">
                <tr class="hover:bg-slate-200">
                  <td class="p-5">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td class="p-5">Malcolm Lockyer</td>
                  <td class="p-5">1961</td>
                </tr>
                <tr class="hover:bg-slate-200">
                  <td class="p-5">Witchy Woman</td>
                  <td class="p-5">The Eagles</td>
                  <td class="p-5">1972</td>
                </tr>
                <tr class="hover:bg-slate-200">
                  <td class="p-5">Shining Star</td>
                  <td class="p-5">Earth, Wind, and Fire</td>
                  <td class="p-5">1975</td>
                </tr>
              </tbody>
            </table>

            <table class="table-fixed w-50 card m-5">
              <thead class="bg-slate-400">
                <tr>
                  <th class="p-5 text-xl">Song</th>
                  <th class="p-5 text-xl">Artist</th>
                  <th class="p-5 text-xl">Year</th>
                  <th class="p-5 text-xl">Genre</th>
                </tr>
              </thead>
              <tbody class="text-center ">
                <tr>
                  <td class="p-5">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td class="p-5">Malcolm Lockyer</td>
                  <td class="p-5">1961</td>
                  <td class="p-5">Pop</td>
                </tr>
                <tr>
                  <td class="p-5">Witchy Woman</td>
                  <td class="p-5">The Eagles</td>
                  <td class="p-5">1972</td>
                  <td class="p-5">Rock</td>
                </tr>
                <tr>
                  <td class="p-5">Shining Star</td>
                  <td class="p-5">Earth, Wind, and Fire</td>
                  <td class="p-5">1975</td>
                  <td class="p-5">Melody</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
