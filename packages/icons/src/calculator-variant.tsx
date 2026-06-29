import { mdiCalculatorVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalculatorVariant(props: IconComponentProps) {
  return <Icon path={mdiCalculatorVariant} {...props} />;
}

export { mdiCalculatorVariant as path };
