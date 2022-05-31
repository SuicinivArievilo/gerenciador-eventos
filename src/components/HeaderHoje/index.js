
export default function HeaderHoje(){
    return (
      
        <div class="px-2 d-flex justify-content-between w-100">
          
                <header class="masthead d-flex w-100 h-100 p-2 flex-column">
                  <div class="nav nav-masthead justify-content-center ">
                  <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                    <li class="nav-item">
                    <a class="nav-link" id="pills-passsados-tab" data-toggle="pill" href="#pills-passados" role="tab" aria-controls="pills-passados" aria-selected="false">Passados</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" id="pills-hoje-tab" data-toggle="pill" href="#pills-hoje" role="tab" aria-controls="pills-hoje" aria-selected="true">Hoje</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" id="pills-chegando-tab" data-toggle="pill" href="#pills-chegando" role="tab" aria-controls="pills-chegando" aria-selected="false">Chegando</a>
                    </li>
                  </ul>
                   <div class="tab-content" id="pills-tabContent">
                   <div class="tab-pane fade show active" id="pills-hoje" role="tabpanel" aria-labelledby="pills-hoje-tab"></div>
                   <div class="tab-pane fade" id="pills-passados" role="tabpanel" aria-labelledby="pills-passados-tab"></div>
                   <div class="tab-pane fade" id="pills-chegando" role="tabpanel" aria-labelledby="pills-chegando-tab"></div>
                   </div>
                  </div>
                </header>
            </div>
    );
    }