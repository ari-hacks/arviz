counties = radon.posterior.observed_county.values
colors = [
    "blue" if county[-1] in ("A", "N") else "green" for county in counties
]
az.plot_khat(loo_radon, color=colors)
