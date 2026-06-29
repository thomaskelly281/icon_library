import { mdiCalculatorVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalculatorVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiCalculatorVariantOutline} {...props} />;
}

export { mdiCalculatorVariantOutline as path };
