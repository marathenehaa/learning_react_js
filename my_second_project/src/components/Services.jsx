const Services = () =>{
    return(
        <>
        <section className="bg-muted-warning" id="services">
            <div className="container">
                <div className="row">
                    <h1 className="p-5">Our Services</h1>
                    <div className="md:col-12">
                        <table class="table theme-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </div> 
            </div>
        </section>
        </>
    );
};
export default Services