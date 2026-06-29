import { mdiMathIntegral } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathIntegral(props: IconComponentProps) {
  return <Icon path={mdiMathIntegral} {...props} />;
}

export { mdiMathIntegral as path };
