
export const Unauthorized = () => {
    return <div>
        <div class="p-3 bg-dark vw-100 vh-100 d-flex flex-column align-items-center justify-content-center" style={{ overflow: "hidden" }}>
            <h3 class="text-danger">FORBIDDEN</h3>
            <div>
                <p class="text-warning">Looks like there was some trouble logging you in, <span class="text-warning">login again</span></p>
            </div>
            <a class="text-decoration-none text-info" href="#login">LOGIN</a>
        </div>
    </div>;
};
