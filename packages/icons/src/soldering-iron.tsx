import { mdiSolderingIron } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SolderingIron(props: IconComponentProps) {
  return <Icon path={mdiSolderingIron} {...props} />;
}

export { mdiSolderingIron as path };
