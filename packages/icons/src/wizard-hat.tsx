import { mdiWizardHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WizardHat(props: IconComponentProps) {
  return <Icon path={mdiWizardHat} {...props} />;
}

export { mdiWizardHat as path };
