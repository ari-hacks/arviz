import arviz as az
idata = az.load_arviz_data("centered_eight")
az.plot_loo_pit(idata=idata, y="obs")
