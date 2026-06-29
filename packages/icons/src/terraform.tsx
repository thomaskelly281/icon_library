import { mdiTerraform } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Terraform(props: IconComponentProps) {
  return <Icon path={mdiTerraform} {...props} />;
}

export { mdiTerraform as path };
