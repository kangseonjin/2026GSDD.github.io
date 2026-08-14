const worksDataset = [
    // Visual (A ~ AK) - 37명 x 2작품 = 74개
    { id: 'V_A_1', category: 'Visual', designer: 'A', title: '작품명 입력 A-1', desc: 'A 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_A_p1.png', detailPrefix: 'pe_A_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_A_2', category: 'Visual', designer: 'A', title: '작품명 입력 A-2', desc: 'A 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_A_p2.png', detailPrefix: 'pe_A_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_B_1', category: 'Visual', designer: 'B', title: '작품명 입력 B-1', desc: 'B 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_B_p1.png', detailPrefix: 'pe_B_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_B_2', category: 'Visual', designer: 'B', title: '작품명 입력 B-2', desc: 'B 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_B_p2.png', detailPrefix: 'pe_B_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_C_1', category: 'Visual', designer: 'C', title: '작품명 입력 C-1', desc: 'C 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_C_p1.png', detailPrefix: 'pe_C_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_C_2', category: 'Visual', designer: 'C', title: '작품명 입력 C-2', desc: 'C 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_C_p2.png', detailPrefix: 'pe_C_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_D_1', category: 'Visual', designer: 'D', title: '작품명 입력 D-1', desc: 'D 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_D_p1.png', detailPrefix: 'pe_D_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_D_2', category: 'Visual', designer: 'D', title: '작품명 입력 D-2', desc: 'D 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_D_p2.png', detailPrefix: 'pe_D_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_E_1', category: 'Visual', designer: 'E', title: '작품명 입력 E-1', desc: 'E 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_E_p1.png', detailPrefix: 'pe_E_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_E_2', category: 'Visual', designer: 'E', title: '작품명 입력 E-2', desc: 'E 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_E_p2.png', detailPrefix: 'pe_E_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_F_1', category: 'Visual', designer: 'F', title: '작품명 입력 F-1', desc: 'F 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_F_p1.png', detailPrefix: 'pe_F_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_F_2', category: 'Visual', designer: 'F', title: '작품명 입력 F-2', desc: 'F 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_F_p2.png', detailPrefix: 'pe_F_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_G_1', category: 'Visual', designer: 'G', title: '작품명 입력 G-1', desc: 'G 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_G_p1.png', detailPrefix: 'pe_G_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_G_2', category: 'Visual', designer: 'G', title: '작품명 입력 G-2', desc: 'G 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_G_p2.png', detailPrefix: 'pe_G_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_H_1', category: 'Visual', designer: 'H', title: '작품명 입력 H-1', desc: 'H 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_H_p1.png', detailPrefix: 'pe_H_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_H_2', category: 'Visual', designer: 'H', title: '작품명 입력 H-2', desc: 'H 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_H_p2.png', detailPrefix: 'pe_H_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_I_1', category: 'Visual', designer: 'I', title: '작품명 입력 I-1', desc: 'I 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_I_p1.png', detailPrefix: 'pe_I_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_I_2', category: 'Visual', designer: 'I', title: '작품명 입력 I-2', desc: 'I 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_I_p2.png', detailPrefix: 'pe_I_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_J_1', category: 'Visual', designer: 'J', title: '작품명 입력 J-1', desc: 'J 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_J_p1.png', detailPrefix: 'pe_J_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_J_2', category: 'Visual', designer: 'J', title: '작품명 입력 J-2', desc: 'J 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_J_p2.png', detailPrefix: 'pe_J_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_K_1', category: 'Visual', designer: 'K', title: '작품명 입력 K-1', desc: 'K 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_K_p1.png', detailPrefix: 'pe_K_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_K_2', category: 'Visual', designer: 'K', title: '작품명 입력 K-2', desc: 'K 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_K_p2.png', detailPrefix: 'pe_K_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_L_1', category: 'Visual', designer: 'L', title: '작품명 입력 L-1', desc: 'L 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_L_p1.png', detailPrefix: 'pe_L_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_L_2', category: 'Visual', designer: 'L', title: '작품명 입력 L-2', desc: 'L 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_L_p2.png', detailPrefix: 'pe_L_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_M_1', category: 'Visual', designer: 'M', title: '작품명 입력 M-1', desc: 'M 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_M_p1.png', detailPrefix: 'pe_M_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_M_2', category: 'Visual', designer: 'M', title: '작품명 입력 M-2', desc: 'M 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_M_p2.png', detailPrefix: 'pe_M_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_N_1', category: 'Visual', designer: 'N', title: '작품명 입력 N-1', desc: 'N 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_N_p1.png', detailPrefix: 'pe_N_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_N_2', category: 'Visual', designer: 'N', title: '작품명 입력 N-2', desc: 'N 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_N_p2.png', detailPrefix: 'pe_N_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_O_1', category: 'Visual', designer: 'O', title: '작품명 입력 O-1', desc: 'O 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_O_p1.png', detailPrefix: 'pe_O_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_O_2', category: 'Visual', designer: 'O', title: '작품명 입력 O-2', desc: 'O 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_O_p2.png', detailPrefix: 'pe_O_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_P_1', category: 'Visual', designer: 'P', title: '작품명 입력 P-1', desc: 'P 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_P_p1.png', detailPrefix: 'pe_P_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_P_2', category: 'Visual', designer: 'P', title: '작품명 입력 P-2', desc: 'P 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_P_p2.png', detailPrefix: 'pe_P_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Q_1', category: 'Visual', designer: 'Q', title: '작품명 입력 Q-1', desc: 'Q 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Q_p1.png', detailPrefix: 'pe_Q_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Q_2', category: 'Visual', designer: 'Q', title: '작품명 입력 Q-2', desc: 'Q 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Q_p2.png', detailPrefix: 'pe_Q_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_R_1', category: 'Visual', designer: 'R', title: '작품명 입력 R-1', desc: 'R 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_R_p1.png', detailPrefix: 'pe_R_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_R_2', category: 'Visual', designer: 'R', title: '작품명 입력 R-2', desc: 'R 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_R_p2.png', detailPrefix: 'pe_R_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_S_1', category: 'Visual', designer: 'S', title: '작품명 입력 S-1', desc: 'S 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_S_p1.png', detailPrefix: 'pe_S_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_S_2', category: 'Visual', designer: 'S', title: '작품명 입력 S-2', desc: 'S 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_S_p2.png', detailPrefix: 'pe_S_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_T_1', category: 'Visual', designer: 'T', title: '작품명 입력 T-1', desc: 'T 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_T_p1.png', detailPrefix: 'pe_T_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_T_2', category: 'Visual', designer: 'T', title: '작품명 입력 T-2', desc: 'T 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_T_p2.png', detailPrefix: 'pe_T_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_U_1', category: 'Visual', designer: 'U', title: '작품명 입력 U-1', desc: 'U 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_U_p1.png', detailPrefix: 'pe_U_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_U_2', category: 'Visual', designer: 'U', title: '작품명 입력 U-2', desc: 'U 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_U_p2.png', detailPrefix: 'pe_U_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_V_1', category: 'Visual', designer: 'V', title: '작품명 입력 V-1', desc: 'V 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_V_p1.png', detailPrefix: 'pe_V_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_V_2', category: 'Visual', designer: 'V', title: '작품명 입력 V-2', desc: 'V 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_V_p2.png', detailPrefix: 'pe_V_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_W_1', category: 'Visual', designer: 'W', title: '작품명 입력 W-1', desc: 'W 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_W_p1.png', detailPrefix: 'pe_W_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_W_2', category: 'Visual', designer: 'W', title: '작품명 입력 W-2', desc: 'W 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_W_p2.png', detailPrefix: 'pe_W_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_X_1', category: 'Visual', designer: 'X', title: '작품명 입력 X-1', desc: 'X 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_X_p1.png', detailPrefix: 'pe_X_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_X_2', category: 'Visual', designer: 'X', title: '작품명 입력 X-2', desc: 'X 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_X_p2.png', detailPrefix: 'pe_X_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Y_1', category: 'Visual', designer: 'Y', title: '작품명 입력 Y-1', desc: 'Y 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Y_p1.png', detailPrefix: 'pe_Y_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Y_2', category: 'Visual', designer: 'Y', title: '작품명 입력 Y-2', desc: 'Y 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Y_p2.png', detailPrefix: 'pe_Y_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Z_1', category: 'Visual', designer: 'Z', title: '작품명 입력 Z-1', desc: 'Z 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Z_p1.png', detailPrefix: 'pe_Z_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_Z_2', category: 'Visual', designer: 'Z', title: '작품명 입력 Z-2', desc: 'Z 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Z_p2.png', detailPrefix: 'pe_Z_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AA_1', category: 'Visual', designer: 'AA', title: '작품명 입력 AA-1', desc: 'AA 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AA_p1.png', detailPrefix: 'pe_AA_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AA_2', category: 'Visual', designer: 'AA', title: '작품명 입력 AA-2', desc: 'AA 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AA_p2.png', detailPrefix: 'pe_AA_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AB_1', category: 'Visual', designer: 'AB', title: '작품명 입력 AB-1', desc: 'AB 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AB_p1.png', detailPrefix: 'pe_AB_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AB_2', category: 'Visual', designer: 'AB', title: '작품명 입력 AB-2', desc: 'AB 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AB_p2.png', detailPrefix: 'pe_AB_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AC_1', category: 'Visual', designer: 'AC', title: '작품명 입력 AC-1', desc: 'AC 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AC_p1.png', detailPrefix: 'pe_AC_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AC_2', category: 'Visual', designer: 'AC', title: '작품명 입력 AC-2', desc: 'AC 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AC_p2.png', detailPrefix: 'pe_AC_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AD_1', category: 'Visual', designer: 'AD', title: '작품명 입력 AD-1', desc: 'AD 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AD_p1.png', detailPrefix: 'pe_AD_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AD_2', category: 'Visual', designer: 'AD', title: '작품명 입력 AD-2', desc: 'AD 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AD_p2.png', detailPrefix: 'pe_AD_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AE_1', category: 'Visual', designer: 'AE', title: '작품명 입력 AE-1', desc: 'AE 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AE_p1.png', detailPrefix: 'pe_AE_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AE_2', category: 'Visual', designer: 'AE', title: '작품명 입력 AE-2', desc: 'AE 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AE_p2.png', detailPrefix: 'pe_AE_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AF_1', category: 'Visual', designer: 'AF', title: '작품명 입력 AF-1', desc: 'AF 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AF_p1.png', detailPrefix: 'pe_AF_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AF_2', category: 'Visual', designer: 'AF', title: '작품명 입력 AF-2', desc: 'AF 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AF_p2.png', detailPrefix: 'pe_AF_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AG_1', category: 'Visual', designer: 'AG', title: '작품명 입력 AG-1', desc: 'AG 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AG_p1.png', detailPrefix: 'pe_AG_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AG_2', category: 'Visual', designer: 'AG', title: '작품명 입력 AG-2', desc: 'AG 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AG_p2.png', detailPrefix: 'pe_AG_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AH_1', category: 'Visual', designer: 'AH', title: '작품명 입력 AH-1', desc: 'AH 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AH_p1.png', detailPrefix: 'pe_AH_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AH_2', category: 'Visual', designer: 'AH', title: '작품명 입력 AH-2', desc: 'AH 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AH_p2.png', detailPrefix: 'pe_AH_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AI_1', category: 'Visual', designer: 'AI', title: '작품명 입력 AI-1', desc: 'AI 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AI_p1.png', detailPrefix: 'pe_AI_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AI_2', category: 'Visual', designer: 'AI', title: '작품명 입력 AI-2', desc: 'AI 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AI_p2.png', detailPrefix: 'pe_AI_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AJ_1', category: 'Visual', designer: 'AJ', title: '작품명 입력 AJ-1', desc: 'AJ 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AJ_p1.png', detailPrefix: 'pe_AJ_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AJ_2', category: 'Visual', designer: 'AJ', title: '작품명 입력 AJ-2', desc: 'AJ 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AJ_p2.png', detailPrefix: 'pe_AJ_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AK_1', category: 'Visual', designer: 'AK', title: '작품명 입력 AK-1', desc: 'AK 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AK_p1.png', detailPrefix: 'pe_AK_p1', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'V_AK_2', category: 'Visual', designer: 'AK', title: '작품명 입력 AK-2', desc: 'AK 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AK_p2.png', detailPrefix: 'pe_AK_p2', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },

    // Space (A ~ R) - 18명 x 1작품 = 18개
    { id: 'S_A', category: 'Space', designer: 'A', title: '작품명 입력 Space-A', desc: 'A 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_A.png', detailPrefix: 'pe_A', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_B', category: 'Space', designer: 'B', title: '작품명 입력 Space-B', desc: 'B 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_B.png', detailPrefix: 'pe_B', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_C', category: 'Space', designer: 'C', title: '작품명 입력 Space-C', desc: 'C 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_C.png', detailPrefix: 'pe_C', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_D', category: 'Space', designer: 'D', title: '작품명 입력 Space-D', desc: 'D 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_D.png', detailPrefix: 'pe_D', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_E', category: 'Space', designer: 'E', title: '작품명 입력 Space-E', desc: 'E 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_E.png', detailPrefix: 'pe_E', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_F', category: 'Space', designer: 'F', title: '작품명 입력 Space-F', desc: 'F 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_F.png', detailPrefix: 'pe_F', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_G', category: 'Space', designer: 'G', title: '작품명 입력 Space-G', desc: 'G 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_G.png', detailPrefix: 'pe_G', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_H', category: 'Space', designer: 'H', title: '작품명 입력 Space-H', desc: 'H 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_H.png', detailPrefix: 'pe_H', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_I', category: 'Space', designer: 'I', title: '작품명 입력 Space-I', desc: 'I 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_I.png', detailPrefix: 'pe_I', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_J', category: 'Space', designer: 'J', title: '작품명 입력 Space-J', desc: 'J 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_J.png', detailPrefix: 'pe_J', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_K', category: 'Space', designer: 'K', title: '작품명 입력 Space-K', desc: 'K 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_K.png', detailPrefix: 'pe_K', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_L', category: 'Space', designer: 'L', title: '작품명 입력 Space-L', desc: 'L 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_L.png', detailPrefix: 'pe_L', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_M', category: 'Space', designer: 'M', title: '작품명 입력 Space-M', desc: 'M 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_M.png', detailPrefix: 'pe_M', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_N', category: 'Space', designer: 'N', title: '작품명 입력 Space-N', desc: 'N 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_N.png', detailPrefix: 'pe_N', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_O', category: 'Space', designer: 'O', title: '작품명 입력 Space-O', desc: 'O 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_O.png', detailPrefix: 'pe_O', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_P', category: 'Space', designer: 'P', title: '작품명 입력 Space-P', desc: 'P 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_P.png', detailPrefix: 'pe_P', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_Q', category: 'Space', designer: 'Q', title: '작품명 입력 Space-Q', desc: 'Q 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_Q.png', detailPrefix: 'pe_Q', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' },
    { id: 'S_R', category: 'Space', designer: 'R', title: '작품명 입력 Space-R', desc: 'R 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_R.png', detailPrefix: 'pe_R', imagesCount: 2, email: '이메일 입력', insta: '@인스타 입력' }
];

const archiveDataset = [
    { year: 2025, format: 'png', link: 'http://gsdd.org/2025/index.html', title: 'CUT! LAYER! PASTE!', desc: '2025년도 전시 설명 내용...' },
    { year: 2024, format: 'webp', link: 'http://gsdd.org/2024/index.html', title: 'Get A Clue', desc: '대학에서의 4년간, 우리는 수 multi 도전을 통해 많은 것을 배웠습니다. 이 과정에서 얻은 경험과 노력이 우리 미래에 대한 중요한 단서를 제공해 주었습니다. “GET A CLUE”는 이러한 경험을 바탕으로, 미래를 향한 방향성을 탐색하는 여정을 선보입니다.' },
    { year: 2023, format: 'png', link: 'http://gsdd.org/2023/index.html', title: 'PROJECT: FUTUREFORMING', desc: '퓨처포밍 프로젝트는 학생들이 각자 광활한 우주로 나아가 별을 찾고, 미래에 정착할 수 있도록 포밍(forming) 시키는 프로젝트다. 졸업 전시를 통해 각자의 미래를 준비하고 모습을 만들어 가는 것을 원석을 깎아 별 조각으로 만드는 것으로 비유하였으며, 별 조각이 대 학생들의 작업물이 하나로 합쳐져 완전한 별 형태를 이룬다. 이는 우리의 미래 가능성을 보여주는 코어로 재현된다. 프로젝트의 성공은 전시장에 포밍 완료된 별 조각 샘플을 채취하여 전시하는 것으로 증명한다.' },
    { year: 2022, format: 'jpeg', link: 'http://gsdd.org/2022/', title: 'NEXT LEVEL', desc: '대학교 4학년의 마지막을 장식하는 졸업전시회는 곧 우리가 사회에 한 걸음 내딛게 된다는 사실을 알려줍니다. 우리는 졸업이라는 과정을 거쳐 학생에서 사회인으로 발전하게 되고, 이렇게 사회 생활이라는 새로운 단계로 넘어가게 됩니다. 학생들은 개개인만의 개성과 능력으로 작품을 만들고, 주어진 다음 단계를 스스로 풀어나간다는 의미를 담았습니다.' },
    { year: 2021, format: 'png', link: 'http://gsdd.org/2021/', title: '2021', desc: '우리는 일상 속에서 디자인을 공부할 때 혹은 공책을 펴볼 때도 쉽게 행과 열을 찾아볼 수 있다. 각기 다른 행과 열이 뻗어 나가면 그 방향성이 모여 하나의 구조를 만들어내고 그 구조 안에는 다양한 가능성이 존재한다. 이는 우리와 닮아있다. 각자의 방식, 각자의 과정과 방법론이 모여 졸업전시회라는 구조를 만들어낸다.' },
    { year: 2020, format: 'webp', link: 'http://gsdd.org/2020/', title: '2020', desc: '지난 1월 유행하기 시작한 전염병 코로나로 인해 학교 출입 시, 마스크에 체온 확인 완료를 표시하기 위해 스티커를 붙여야만 했다. 둥근 모양의 형광 스티커는 매일 다른 색으로 교체되었고 버려지거나 핸드폰, 노트북, 방 거울 등에 쌓여갔다. 형형색색의 스티커는 곧 코로나로 인해 바뀌어버린 우리의 생활을 뜻하기도 하지만 둥글둥글 귀여운 모양으로 핸드폰 뒷면에 남아있기도 했다. 우리는 둥근 스티커로 졸업생 한 명 한 명의 개성을 표현하고자 했다.' },
    { year: 2019, format: 'webp', link: 'http://gsdd.org/2019/', title: '2019', desc: '제 1회 동양대학교 디자인학부 졸업전시회' }
];

/* -----------------------------------------------------------
   Works 렌더링 로직
----------------------------------------------------------- */
function renderWorksGrid(data) {
    const grid = document.getElementById('works-list-grid');
    grid.innerHTML = '';
    
    data.forEach(work => {
        const workItem = document.createElement('li'); 
        workItem.className = 'works-item';
        workItem.onclick = () => showWorkDetail(work.id);
        
        workItem.innerHTML = `
            <figure class="works-thumb">
                3 Columns<br>282px x 352px<br>(${work.thumbFile})
            </figure>
            <article class="works-meta">
                <h3 class="works-title">${work.title}</h3>
                <p class="works-author">${work.designer} / ${work.category}</p>
            </article>
        `;
        grid.appendChild(workItem);
    });
}

function filterWorksByCategory(category) {
    document.querySelectorAll('.works-filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${category.toLowerCase()}`).classList.add('active');
    
    const filteredData = category === 'All' ? worksDataset : worksDataset.filter(w => w.category === category);
    renderWorksGrid(filteredData);
}

/* ===========================================================
   Works Detail (상세 페이지 렌더링 로직)
=========================================================== */
function showWorkDetail(workId) {
    const work = worksDataset.find(w => w.id === workId);
    if (!work) return;

    navigateToPage('detail');
    
    // 텍스트 정보 개별 업데이트
    document.getElementById('detail-project-title').innerText = work.title;
    document.getElementById('detail-author-name').innerText = work.designer;
    
    // 이메일과 인스타를 개별 데이터셋에서 가져옴 (없으면 빈칸 처리)
    const emailEl = document.getElementById('detail-author-email');
    const instaEl = document.getElementById('detail-author-insta');
    if (emailEl) emailEl.innerText = work.email || '';
    if (instaEl) instaEl.innerText = work.insta || '';
    
    // 작품 설명 (엔터를 줄바꿈 <br> 태그로 변환해서 출력)
    document.getElementById('detail-description-text').innerHTML = (work.desc || '').replace(/\n/g, '<br>');
    
    const imagesList = document.getElementById('detail-images-list');
    imagesList.innerHTML = ''; 

    // 이미지 1장만 생성 (가로 588px 고정)
    const imgBox = document.createElement('figure');
    imgBox.className = 'detail-img-placeholder';
    
    // 현재는 회색 빈 박스 디자인 유지용 코드 (실제 이미지 시 imgBox.innerHTML = `<img src="..." />` 로 교체)
    imgBox.innerHTML = `작품 이미지<br><br>Width: 588px<br>(${work.detailPrefix}.png)`;
    
    imagesList.appendChild(imgBox);
}

/* -----------------------------------------------------------
   Archive 렌더링 로직
----------------------------------------------------------- */
let archiveIndex = 0;

function initArchivePagination() {
    const dotsContainer = document.getElementById('archive-dots-container');
    
    archiveDataset.forEach((data, index) => {
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'archive-dot active' : 'archive-dot';
        dot.onclick = () => { archiveIndex = index; updateArchiveView(); };
        dotsContainer.appendChild(dot);
    });
}

function moveArchiveSlide(direction) {
    archiveIndex += direction; 
    if (archiveIndex < 0) archiveIndex = archiveDataset.length - 1;
    if (archiveIndex >= archiveDataset.length) archiveIndex = 0;
    updateArchiveView();
}

function updateArchiveView() {
    const data = archiveDataset[archiveIndex];
    
    document.getElementById('archive-display-year').innerText = data.year;
    document.getElementById('archive-title-text').innerText = data.title;
    document.getElementById('archive-description-text').innerText = data.desc;
    
    const posterContainer = document.getElementById('archive-poster-container');
    
    posterContainer.innerHTML = `<img src="${data.year}gsdd.${data.format}" alt="${data.year} GSDD Poster">`;

    const dots = document.querySelectorAll('.archive-dot');
    dots.forEach((dot, idx) => {
        if (idx === archiveIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function openArchiveExternalLink() {
    const url = archiveDataset[archiveIndex].link;
    window.open(url, '_blank');
}

/* -----------------------------------------------------------
   페이지 네비게이션 로직
----------------------------------------------------------- */
function navigateToPage(pageName) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const targetId = `section-${pageName}`;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const targetNavId = `link-${pageName}`;
    const targetNavLink = document.getElementById(targetNavId);
    if (targetNavLink) {
        targetNavLink.classList.add('active');
    }

    if (pageName === 'detail' || pageName === 'works') {
        document.getElementById('link-works').classList.add('active');
    }

    document.body.classList.toggle('is-main-page', pageName === 'main');

    // 보이지 않는 페이지의 물리요소가 마우스를 방해하지 않도록 처리
    const mainStage = document.getElementById('physics-stage');
    const gbStage = document.getElementById('guestbook-physics-stage');
    if (mainStage) mainStage.style.pointerEvents = (pageName === 'main') ? 'auto' : 'none';
    if (gbStage) gbStage.style.pointerEvents = (pageName === 'guestbook') ? 'auto' : 'none';

    // Guestbook은 처음 로드될 때 display:none이라 크기가 0이므로,
    // 실제 페이지가 화면에 표시된 다음 물리엔진을 시작한다.
    if (pageName === 'guestbook' && !window.__guestbookPhysicsInitialized) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => initGuestbookPhysics());
        });
    }
    
    if (pageName === 'archive') {
        archiveIndex = 0;
        updateArchiveView();
    }
    
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'auto';
    }

    window.scrollTo(0, 0);
}

/* -----------------------------------------------------------
   모바일 햄버거 메뉴 제어 로직 (드롭다운 삭제 반영)
----------------------------------------------------------- */
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        hamburgerBtn.innerText = '✕';
        document.body.style.overflow = 'hidden'; 
    } else {
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'auto'; 
    }
}

/* -----------------------------------------------------------
   About 영상 플레이 상태
----------------------------------------------------------- */
function toggleAboutFilm(button) {
    const playing = button.dataset.playing === 'true';
    button.dataset.playing = String(!playing);
    button.textContent = playing ? '▶' : 'Ⅱ';
    button.setAttribute('aria-label', playing ? '소개 영상 재생' : '소개 영상 일시정지');
}

/* ===========================================================
   방명록 필수 데이터 및 다중 표정 상태
=========================================================== */
const guestbookStorageKey = 'gsdd-guestbook-entries';

const gbColors = [
    '#F6A700', '#E6E6E6', '#E72F4C', '#EA5703', '#FBEE00', 
    '#F6C3D9', '#009DDA', '#6D7F88', '#14A146', '#AAA1CE', 
    '#73BEA2', '#9A87BE', '#0068AD'
];

const textBgColors = [
    '#F6A700', '#E6E6E6', '#E72F4C', '#EA5703', '#FBEE00', 
    '#F6C3D9', '#009DDA', '#6D7F88', '#14A146', '#AAA1CE', 
    '#73BEA2', '#9A87BE', '#0068AD'
];

let gbDraft = { shapeColorIdx: 1, shapeIdx: null };
let gbFaces = []; 
let activeFaceId = null; 

const totalShapes = 12; 
const totalFaces = 11;  

function getGuestbookEntries() {
    try { return JSON.parse(localStorage.getItem(guestbookStorageKey)) || []; }
    catch { return []; }
}

/* ===========================================================
   방명록 팝업 컨트롤 및 탭
=========================================================== */
function openGuestbookPopup() {
    const popup = document.getElementById('guestbook-popup');
    if (popup) {
        popup.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
        
        gbDraft = { shapeColorIdx: 1, shapeIdx: null };
        gbFaces = [];
        activeFaceId = null;
        document.getElementById('gb-name').value = '';
        document.getElementById('gb-message').value = '';
        
        setGuestbookTab('shape'); 
        updateGuestbookPreview(); 
        renderFacesDOM(); 
    }
}

function closeGuestbookPopup() {
    const popup = document.getElementById('guestbook-popup');
    if (popup) {
        popup.classList.add('hidden');
        document.body.style.overflow = ''; 
    }
}

function setGuestbookTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
    document.querySelectorAll('.gb-tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === `gb-panel-${tabName}`));
}

/* ===========================================================
   초기화 및 색상 갱신
=========================================================== */
function initGuestbookControls() {
    const renderPalette = (containerId, type) => {
        const container = document.getElementById(containerId);
        if(!container) return;
        container.innerHTML = ''; 
        gbColors.forEach((color, idx) => {
            const btn = document.createElement('div');
            btn.className = 'color-swatch';
            btn.style.backgroundColor = color;
            btn.dataset.idx = idx + 1;
            btn.onclick = () => { 
                if(type === 'shape') {
                    gbDraft.shapeColorIdx = idx + 1;
                    updateGuestbookPreview(); 
                } else if(type === 'face' && activeFaceId !== null) {
                    const face = gbFaces.find(f => f.id === activeFaceId);
                    if (face) {
                        face.colorIdx = idx + 1;
                        const wrapper = document.getElementById(`face-wrapper-${activeFaceId}`);
                        if (wrapper) wrapper.querySelector('img').src = `guestbook/gb${face.colorIdx}-${face.faceIdx}.png`;
                    }
                }
                updatePaletteActiveStates(); 
            };
            container.appendChild(btn);
        });
    };
    
    renderPalette('gb-shape-colors', 'shape');
    renderPalette('gb-face-colors', 'face');

    const shapePicker = document.getElementById('gb-shape-picker');
    for (let i = 1; i <= totalShapes; i++) {
        const btn = document.createElement('button');
        btn.className = 'shape-choice';
        btn.innerHTML = `<img src="guestbook/pvf${i}.png" alt="형태${i}">`;
        btn.onclick = () => { gbDraft.shapeIdx = i; updateGuestbookPreview(); };
        shapePicker.appendChild(btn);
    }

    const facePicker = document.getElementById('gb-face-picker');
    for (let i = 1; i <= totalFaces; i++) {
        const btn = document.createElement('button');
        btn.className = 'face-choice';
        btn.innerHTML = `<img src="guestbook/pvc${i}.png" alt="표정${i}">`;
        btn.onclick = () => { 
            const newFace = {
                id: Date.now() + Math.random(),
                faceIdx: i, colorIdx: 1, 
                x: 0, y: 0, scale: 0.6, rotation: 0
            };
            gbFaces.push(newFace);
            activeFaceId = newFace.id; 
            renderFacesDOM();
            updatePaletteActiveStates();
        };
        facePicker.appendChild(btn);
    }
}

function updatePaletteActiveStates() {
    const shapeColors = document.getElementById('gb-shape-colors');
    if(shapeColors) shapeColors.querySelectorAll('.color-swatch').forEach(el => el.classList.toggle('active', parseInt(el.dataset.idx) === gbDraft.shapeColorIdx));
    
    const activeFace = gbFaces.find(f => f.id === activeFaceId);
    const activeColorIdx = activeFace ? activeFace.colorIdx : 0;
    const faceColors = document.getElementById('gb-face-colors');
    if(faceColors) faceColors.querySelectorAll('.color-swatch').forEach(el => el.classList.toggle('active', parseInt(el.dataset.idx) === activeColorIdx));
    
    document.querySelectorAll('.shape-choice').forEach((el, idx) => el.classList.toggle('active', idx + 1 === gbDraft.shapeIdx));
}

function deselectFace(e) {
    if (e.target.id === 'gb-preview-area' || e.target.id === 'gb-preview-character' || e.target.id === 'gb-preview-shape' || e.target.id === 'gb-faces-container') {
        makeFaceActive(null);
    }
}

function makeFaceActive(id) {
    activeFaceId = id;
    document.querySelectorAll('.preview-face-controller').forEach(el => el.classList.remove('active'));
    if (id) {
        const activeEl = document.getElementById(`face-wrapper-${id}`);
        if (activeEl) activeEl.classList.add('active');
    }
    updatePaletteActiveStates();
}

function updateGuestbookPreview() {
    const shapeImg = document.getElementById('gb-preview-shape');
    if (!gbDraft.shapeIdx) {
        shapeImg.style.display = 'none';
    } else {
        shapeImg.style.display = 'block';
        shapeImg.src = `guestbook/guestbook${gbDraft.shapeColorIdx}-${gbDraft.shapeIdx}.png`;
    }
    updatePaletteActiveStates();
}

function renderFacesDOM() {
    const facesContainer = document.getElementById('gb-faces-container');
    facesContainer.innerHTML = '';
    
    gbFaces.forEach(face => {
        const wrapper = document.createElement('div');
        wrapper.id = `face-wrapper-${face.id}`;
        wrapper.className = `preview-face-controller ${face.id === activeFaceId ? 'active' : ''}`;
        wrapper.style.pointerEvents = 'auto';
        
        const baseSize = 190; // 크기 축소 비율 반영 (250 -> 190)
        const currentSize = baseSize * face.scale;
        wrapper.style.width = `${currentSize}px`;
        wrapper.style.height = `${currentSize}px`;
        wrapper.style.left = `calc(50% + ${face.x}px)`;
        wrapper.style.top = `calc(50% + ${face.y}px)`;
        wrapper.style.transform = `translate(-50%, -50%) rotate(${face.rotation}deg)`;

        const img = document.createElement('img');
        img.src = `guestbook/gb${face.colorIdx}-${face.faceIdx}.png`;
        wrapper.appendChild(img);

        const moveHandle = document.createElement('div');
        moveHandle.className = 'move-handle';
        moveHandle.onmousedown = (e) => startDragFace(e, face.id);
        wrapper.appendChild(moveHandle);

        const delHandle = document.createElement('div');
        delHandle.className = 'face-handle face-handle-delete';
        delHandle.innerHTML = '✕';
        delHandle.onmousedown = (e) => { e.stopPropagation(); gbFaces = gbFaces.filter(f => f.id !== face.id); activeFaceId = null; renderFacesDOM(); updatePaletteActiveStates(); };
        wrapper.appendChild(delHandle);

        const resHandle = document.createElement('div');
        resHandle.className = 'face-handle face-handle-resize';
        resHandle.innerHTML = '↔';
        resHandle.onmousedown = (e) => startScaleFace(e, face.id);
        wrapper.appendChild(resHandle);

        const rotHandle = document.createElement('div');
        rotHandle.className = 'face-handle face-handle-rotate';
        rotHandle.innerHTML = '↻';
        rotHandle.onmousedown = (e) => startRotateFace(e, face.id);
        wrapper.appendChild(rotHandle);

        facesContainer.appendChild(wrapper);
    });
}

/* ===========================================================
   마우스 드래그 이벤트 (이동, 크기, 회전)
=========================================================== */
function startDragFace(e, id) {
    e.preventDefault(); e.stopPropagation();
    makeFaceActive(id);

    const face = gbFaces.find(f => f.id === id);
    const wrapper = document.getElementById(`face-wrapper-${id}`);
    if (!wrapper) return;

    let startX = e.clientX; let startY = e.clientY;
    let initialX = face.x; let initialY = face.y;

    const onMouseMove = (event) => {
        face.x = initialX + (event.clientX - startX);
        face.y = initialY + (event.clientY - startY);
        wrapper.style.left = `calc(50% + ${face.x}px)`;
        wrapper.style.top = `calc(50% + ${face.y}px)`;
    };

    const onMouseUp = () => { 
        document.removeEventListener('mousemove', onMouseMove); 
        document.removeEventListener('mouseup', onMouseUp); 
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function startScaleFace(e, id) {
    e.preventDefault(); e.stopPropagation();
    makeFaceActive(id);
    
    const face = gbFaces.find(f => f.id === id);
    const wrapper = document.getElementById(`face-wrapper-${id}`);
    if (!wrapper) return;
    
    const rect = wrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const startDist = Math.hypot(e.clientX - cx, e.clientY - cy);
    const startScale = face.scale;

    const onMouseMove = (event) => {
        const currentDist = Math.hypot(event.clientX - cx, event.clientY - cy);
        face.scale = Math.max(0.2, Math.min(3.0, startScale * (currentDist / startDist)));
        
        const baseSize = 190; // 크기 축소 비율 반영 (250 -> 190)
        const currentSize = baseSize * face.scale;
        wrapper.style.width = `${currentSize}px`;
        wrapper.style.height = `${currentSize}px`;
    };

    const onMouseUp = () => { 
        document.removeEventListener('mousemove', onMouseMove); 
        document.removeEventListener('mouseup', onMouseUp); 
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function startRotateFace(e, id) {
    e.preventDefault(); e.stopPropagation();
    makeFaceActive(id);
    
    const face = gbFaces.find(f => f.id === id);
    const wrapper = document.getElementById(`face-wrapper-${id}`);
    if (!wrapper) return;
    
    const rect = wrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const startAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    const startRot = face.rotation;

    const onMouseMove = (event) => {
        const currentAngle = Math.atan2(event.clientY - cy, event.clientX - cx) * (180 / Math.PI);
        face.rotation = startRot + (currentAngle - startAngle);
        wrapper.style.transform = `translate(-50%, -50%) rotate(${face.rotation}deg)`;
    };

    const onMouseUp = () => { 
        document.removeEventListener('mousemove', onMouseMove); 
        document.removeEventListener('mouseup', onMouseUp); 
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

/* ===========================================================
   최종 저장
=========================================================== */
function saveGuestbookEntry() {
    const name = document.getElementById('gb-name').value.trim();
    const msg = document.getElementById('gb-message').value.trim();
    
    if (!gbDraft.shapeIdx) { alert("형태를 선택해주세요!"); return; }
    if (gbFaces.length === 0) { alert("최소 1개 이상의 표정을 넣어주세요!"); return; }
    if (!name || !msg) { alert("이름과 메시지를 입력해주세요."); setGuestbookTab('message'); return; }

    const entries = getGuestbookEntries();
    entries.unshift({ 
        shapeColorIdx: gbDraft.shapeColorIdx,
        shapeIdx: gbDraft.shapeIdx,
        faces: gbFaces, 
        name, message: msg,
        nameBg: textBgColors[Math.floor(Math.random() * textBgColors.length)],
        msgBg: textBgColors[Math.floor(Math.random() * textBgColors.length)]
    });
    
    localStorage.setItem(guestbookStorageKey, JSON.stringify(entries));
    closeGuestbookPopup(); 
    location.reload(); 
}

/* ===========================================================
   커스텀 마우스 커서 움직임 및 클릭 시 mouse1~13.png 랜덤 변경
=========================================================== */
const customCursor = document.getElementById('custom-cursor');

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        customCursor.style.display = 'block';
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mousedown', () => {
        const randomNum = Math.floor(Math.random() * 13) + 1;
        customCursor.src = `mouse/mouse${randomNum}.png`;
    });
}

/* ===========================================================
   과제 1: 메인 화면 물리엔진
=========================================================== */
function initPhysics() {
    const Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner,
          Bodies = Matter.Bodies, Composite = Matter.Composite,
          Mouse = Matter.Mouse, MouseConstraint = Matter.MouseConstraint,
          Events = Matter.Events, Query = Matter.Query;

    const engine = Engine.create();
    const world = engine.world;
    
    engine.positionIterations = 20; 
    engine.velocityIterations = 20; 
    engine.world.gravity.y = 0.8;
    
    const stage = document.getElementById('physics-stage');
    const gbStage = document.getElementById('main-guestbook-stage');
    if(!stage) return;

    if(gbStage) {
        gbStage.style.left = 'calc(50% - 50vw)';
        gbStage.style.width = '100vw';
        gbStage.style.height = 'calc(100vh - 80px)';
    }

    const randomXForWidth = (width) => {
        if (width >= stage.clientWidth) return stage.clientWidth / 2;
        return Math.random() * (stage.clientWidth - width) + (width / 2);
    };

    const render = Render.create({
        element: stage,
        engine: engine,
        options: {
            width: stage.clientWidth,
            height: stage.clientHeight,
            wireframes: false,
            background: 'transparent'
        }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const wallOptions = { isStatic: true, restitution: 0.1, friction: 0.8, render: { visible: false } };
    
    const floorY = stage.clientHeight + 250; 
    const floor = Bodies.rectangle(stage.clientWidth / 2, floorY, stage.clientWidth * 2, 500, wallOptions);
    const leftWall = Bodies.rectangle(-250, stage.clientHeight / 2, 500, stage.clientHeight * 5, wallOptions);
    const rightWall = Bodies.rectangle(stage.clientWidth + 250, stage.clientHeight / 2, 500, stage.clientHeight * 5, wallOptions);
    
    Composite.add(world, [floor, leftWall, rightWall]);

    // 방명록 아이템 생성 (메인 화면)
    const recentGbEntries = getGuestbookEntries().slice(0, 10); 
    const domPhysicsItems = []; 

    if(gbStage) {
        recentGbEntries.forEach((entry, idx) => {
            const visualSize = 200; 
            const hitBoxSize = 130; 
            
            const startX = randomXForWidth(hitBoxSize);
            const startY = -800 - (idx * 250); 

            const gbBody = Bodies.rectangle(startX, startY, hitBoxSize, hitBoxSize, { 
                restitution: 0.2, friction: 0.8, density: 0.05, chamfer: { radius: 10 }, render: { visible: false } 
            });
            Composite.add(world, gbBody);

            const wrapper = document.createElement('div');
            wrapper.className = 'guestbook-stack-item';
            wrapper.style.position = 'absolute';
            wrapper.style.width = `${visualSize}px`;
            wrapper.style.height = `${visualSize}px`;
            wrapper.style.pointerEvents = 'none'; 
            
            const shapeImg = document.createElement('img');
            shapeImg.src = `guestbook/guestbook${entry.shapeColorIdx}-${entry.shapeIdx}.png`;
            shapeImg.style.position = 'absolute'; 
            shapeImg.style.width = '100%'; 
            shapeImg.style.height = '100%';
            shapeImg.style.objectFit = 'contain';
            wrapper.appendChild(shapeImg);
            
            const stageScale = visualSize / 450; 
            entry.faces.forEach(f => {
                const faceImg = document.createElement('img');
                faceImg.src = `guestbook/gb${f.colorIdx}-${f.faceIdx}.png`;
                faceImg.style.position = 'absolute'; 
                
                const faceWidth = 190 * f.scale * stageScale; // 크기 축소 비율 반영 (250 -> 190)
                faceImg.style.width = `${faceWidth}px`; 
                faceImg.style.height = `${faceWidth}px`;
                faceImg.style.left = `calc(50% + ${f.x * stageScale}px)`;
                faceImg.style.top = `calc(50% + ${f.y * stageScale}px)`;
                faceImg.style.objectFit = 'contain';
                faceImg.style.transform = `translate(-50%, -50%) rotate(${f.rotation}deg)`; 
                wrapper.appendChild(faceImg);
            });

            gbStage.appendChild(wrapper);
            domPhysicsItems.push({ body: gbBody, el: wrapper, size: visualSize });
        });

        Events.on(engine, 'afterUpdate', function() {
            domPhysicsItems.forEach(item => {
                const pos = item.body.position;
                const angle = item.body.angle;
                item.el.style.transform = `translate(${pos.x - item.size/2}px, ${pos.y - item.size/2}px) rotate(${angle}rad)`;
            });
        });
    }

    // 메인 그래픽 & 타이포 18종 생성
    const mainGraphics = [
        { src: 'maingraphic-01.png', width: 1063, height: 1063 },
        { src: 'maingraphic-02.png', width: 1075, height: 963 },
        { src: 'maingraphic-03.png', width: 746, height: 742 },
        { src: 'maingraphic-04.png', width: 746, height: 742 },
        { src: 'maingraphic-05.png', width: 1117, height: 1080 },
        { src: 'maingraphic-06.png', width: 896, height: 646 },
        { src: 'maingraphic-07.png', width: 880, height: 621 },
        { src: 'maingraphic-08.png', width: 909, height: 767 },
        { src: 'maingraphic-09.png', width: 621, height: 721 },
        { src: 'maingraphic-10.png', width: 1259, height: 330 },
        { src: 'maingraphic-11.png', width: 1125, height: 875 },
        { src: 'maingraphic-12.png', width: 1338, height: 759 },
        { src: 'maingraphic-13.png', width: 1000, height: 1000 } 
    ];

    mainGraphics.forEach((image) => {
        const minScale = 0.25;
        const maxScale = 0.1;
        const randomScale = Math.random() * (maxScale - minScale) + minScale;

        const hitBoxWidth = image.width * randomScale;
        const hitBoxHeight = image.height * randomScale;
        const startX = randomXForWidth(hitBoxWidth);
        const startY = (Math.random() * -1500) - 200; 

        const graphic = Bodies.rectangle(startX, startY, hitBoxWidth, hitBoxHeight, {
            restitution: 0.1,    
            friction: 0.9,       
            density: 0.05,
            chamfer: { radius: 4 }, 
            render: { sprite: { texture: image.src, xScale: randomScale, yScale: randomScale } }
        });
        Composite.add(world, graphic);
    });

    const typoScale = 0.3; 
    const typoGraphics = [
        { src: 'typo-1.png', width: 3132, height: 398, customScale: 0.15 },
        { src: 'typo-2.png', width: 925, height: 134 },
        { src: 'typo-3.png', width: 1242, height: 350, customScale: 0.15 },
        { src: 'typo-4.png', width: 884, height: 134 },
        { src: 'typo-5.png', width: 423, height: 134 }
    ];

    typoGraphics.forEach((typo, index) => {
        const scale = typo.customScale || typoScale;
        const hitBoxWidth = typo.width * scale;
        const hitBoxHeight = typo.height * scale;
        const startX = randomXForWidth(hitBoxWidth);
        const startY = -300 - (index * 300); 

        const typoBody = Bodies.rectangle(startX, startY, hitBoxWidth, hitBoxHeight, {
            restitution: 0.1, friction: 0.9, density: 0.05, chamfer: { radius: 4 }, 
            render: { sprite: { texture: typo.src, xScale: scale, yScale: scale } }
        });
        Composite.add(world, typoBody);
    });

    // Click 버튼 및 인터랙션 (드래그/클릭 꼬임 방지 적용됨)
    const clickBody = Bodies.circle(stage.clientWidth / 2, -1200, 86, {
        label: 'clickBtn', restitution: 0.05, friction: 0.9, frictionStatic: 0.9, frictionAir: 0.02, density: 0.05,
        render: { sprite: { texture: 'Click1.png', xScale: 0.3, yScale: 0.3 } }
    });
    Composite.add(world, clickBody);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse, constraint: { stiffness: 0.2, render: { visible: false } }
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;
    
    Events.on(mouseConstraint, 'mousemove', function(event) {
        const foundPhysics = Query.point(engine.world.bodies, event.mouse.position);
        let isHoveringClick = false;

        if (foundPhysics.length > 0 && foundPhysics[0].label === 'clickBtn') {
            foundPhysics[0].render.sprite.texture = 'Click2.png';
            render.canvas.style.cursor = 'pointer'; 
            isHoveringClick = true;
        }
        if (!isHoveringClick && clickBody.render.sprite.texture !== 'Click1.png') {
            clickBody.render.sprite.texture = 'Click1.png';
            render.canvas.style.cursor = 'default';
        }
    });

    let clickStartX = null;
    let clickStartY = null;

    Events.on(mouseConstraint, 'mousedown', function(event) {
        const foundPhysics = Query.point(engine.world.bodies, event.mouse.position);
        if (foundPhysics.length > 0 && foundPhysics[0].label === 'clickBtn') {
            clickStartX = event.mouse.position.x;
            clickStartY = event.mouse.position.y;
        } else {
            clickStartX = null;
        }
    });

    Events.on(mouseConstraint, 'mouseup', function(event) {
        if (clickStartX !== null) {
            const dx = event.mouse.position.x - clickStartX;
            const dy = event.mouse.position.y - clickStartY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // 이동 거리가 적을 때만 클릭으로 판정
            if (distance < 5) {
                openGuestbookPopup(); 
                mouseConstraint.body = null;
            }
            clickStartX = null;
        }
    });

    window.addEventListener('resize', () => {
        render.canvas.width = stage.clientWidth;
        render.canvas.height = stage.clientHeight;
        Matter.Body.setPosition(floor, { x: stage.clientWidth / 2, y: stage.clientHeight + 250 });
        Matter.Body.setPosition(rightWall, { x: stage.clientWidth + 250, y: stage.clientHeight / 2 });
        Matter.Body.setPosition(leftWall, { x: -250, y: stage.clientHeight / 2 });
    });
}

/* ===========================================================
   과제 2: 방명록 화면 전용 물리엔진
=========================================================== */
function initGuestbookPhysics() {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const Events = Matter.Events;
    const Body = Matter.Body;

    const stage = document.getElementById('guestbook-physics-stage');
    const domStage = document.getElementById('guestbook-dom-stage');
    if (!stage || !domStage) return;

    if (window.__guestbookPhysicsInitialized) return;
    window.__guestbookPhysicsInitialized = true;

    stage.innerHTML = '';
    domStage.innerHTML = '';

    const entries = getGuestbookEntries();
    const CARD_W = 282;
    const CARD_H = 352;
    const GAP = 24;

    const getColumns = () => {
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1100) return 3;
        return 4;
    };

    const getTopMargin = () => window.innerWidth <= 768 ? 100 : 150; 

    const getLayout = () => {
        const currentWidth = stage.clientWidth || window.innerWidth;
        const columns = getColumns();
        const available = Math.max(160, currentWidth - (columns - 1) * GAP);
        const width = Math.min(CARD_W, available / columns);
        const scale = width / CARD_W;
        const height = CARD_H * scale;
        const totalWidth = columns * width + (columns - 1) * GAP;
        const left = Math.max(0, (currentWidth - totalWidth) / 2);
        return { columns, width, height, scale, left };
    };

    let layout = getLayout();
    const cardStates = [];

    const createCard = (entry, idx) => {
        const slot = idx + 1; 
        const row = Math.floor(slot / layout.columns);
        const col = slot % layout.columns;

        const card = {
            x: layout.left + col * (layout.width + GAP),
            y: getTopMargin() + row * (layout.height + GAP), 
            w: layout.width,
            h: layout.height,
            scale: layout.scale
        };

        const frame = document.createElement('article');
        frame.className = 'gb-fixed-frame';
        frame.style.left = `${card.x}px`;
        frame.style.top = `${card.y}px`;
        frame.style.width = `${card.w}px`;
        frame.style.height = `${card.h}px`;
        frame.setAttribute('aria-label', `${entry.name}의 방명록`);

        const physicsHost = document.createElement('div');
        physicsHost.className = 'gb-card-physics-host';
        physicsHost.style.cssText = 'position:absolute; inset:0; z-index:2; pointer-events:auto;';

        const contentLayer = document.createElement('div');
        contentLayer.className = 'gb-frame-content-layer';
        contentLayer.style.zIndex = '20';
        contentLayer.style.pointerEvents = 'none';

        frame.appendChild(physicsHost);
        frame.appendChild(contentLayer);
        domStage.appendChild(frame);

        card.frame = frame;
        card.layer = contentLayer;
        card.physicsHost = physicsHost;

        const engine = Engine.create();
        engine.positionIterations = 12;
        engine.velocityIterations = 12;
        engine.constraintIterations = 6;
        engine.enableSleeping = true;
        engine.world.gravity.y = 0.9;

        const render = Render.create({
            element: physicsHost,
            engine,
            options: {
                width: card.w,
                height: card.h,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio || 1
            }
        });

        render.canvas.style.position = 'absolute';
        render.canvas.style.inset = '0';
        render.canvas.style.width = '100%';
        render.canvas.style.height = '100%';
        render.canvas.style.background = 'transparent';
        render.canvas.style.pointerEvents = 'auto';

        const wallThickness = 60; 
        const innerPadding = 16;  

        const wallOptions = {
            isStatic: true,
            restitution: 0,
            friction: 0.95,
            frictionStatic: 1,
            render: { visible: false }
        };

        const walls = [
            Bodies.rectangle(card.w / 2, card.h + wallThickness / 2 - innerPadding, card.w + wallThickness * 2, wallThickness, wallOptions),
            Bodies.rectangle(-wallThickness / 2 + innerPadding, card.h / 2, wallThickness, card.h + wallThickness * 2, wallOptions),
            Bodies.rectangle(card.w + wallThickness / 2 - innerPadding, card.h / 2, wallThickness, card.h + wallThickness * 2, wallOptions)
        ];

        Composite.add(engine.world, walls);

        const contentBodies = [];

        const makeContentBody = (x, y, w, h) => Bodies.rectangle(x, y, w, h, {
            restitution: 0,
            friction: 0.92,
            frictionStatic: 1,
            frictionAir: 0.045,
            density: 0.05,
            sleepThreshold: 45,
            chamfer: { radius: Math.min(8, Math.min(w, h) / 4) },
            render: { visible: false }
        });

        const registerContent = (body, element) => {
            body.plugin = {
                guestbookContent: true,
                element,
                width: body.bounds.max.x - body.bounds.min.x,
                height: body.bounds.max.y - body.bounds.min.y
            };
            contentBodies.push(body);
            Composite.add(engine.world, body);
        };

        // 1. 캐릭터
        const characterSize = 220 * card.scale;
        const character = document.createElement('div');
        character.className = 'gb-content-item gb-character-content';
        character.style.width = `${characterSize}px`;
        character.style.height = `${characterSize}px`;

        const shape = document.createElement('img');
        shape.className = 'gb-content-shape';
        shape.src = `guestbook/guestbook${entry.shapeColorIdx}-${entry.shapeIdx}.png`;
        shape.alt = '방명록 캐릭터';
        character.appendChild(shape);

        (entry.faces || []).forEach(face => {
            const img = document.createElement('img');
            img.className = 'gb-content-face';
            img.src = `guestbook/gb${face.colorIdx}-${face.faceIdx}.png`;
            img.alt = '';

            const faceScale = (characterSize / 850);
            const faceSize = 190 * (Number(face.scale) || 1) * faceScale; // 크기 축소 비율 반영 (250 -> 190)

            img.style.width = `${faceSize}px`;
            img.style.height = `${faceSize}px`;
            img.style.left = `calc(50% + ${(Number(face.x) || 0) * faceScale}px)`;
            img.style.top = `calc(50% + ${(Number(face.y) || 0) * faceScale}px)`;
            img.style.transform = `translate(-50%, -50%) rotate(${Number(face.rotation) || 0}deg)`;

            character.appendChild(img);
        });

        contentLayer.appendChild(character);

        const characterBodyWidth = characterSize * 0.85; 
        const characterBodyHeight = characterSize * 0.5; 
        const characterBody = makeContentBody(
            card.w / 2 + (Math.random() - 0.5) * card.w * 0.16,
            60, 
            characterBodyWidth,
            characterBodyHeight
        );
        registerContent(characterBody, character);
        Body.setInertia(characterBody, Infinity);
        Body.setAngularVelocity(characterBody, 0);

        // 2. 이름
        const name = document.createElement('div');
        name.className = 'gb-content-item gb-content-name';
        name.textContent = entry.name || '';
        name.style.backgroundColor = entry.nameBg || '#ffcc00';
        name.style.fontSize = `${Math.max(12, 16 * card.scale)}px`;

        const nameW = Math.min(card.w * 0.75, Math.max(90, 50 + String(entry.name || '').length * 16) * card.scale);
        const nameH = Math.max(26, 32 * card.scale);

        name.style.width = `${nameW}px`;
        name.style.height = `${nameH}px`;
        contentLayer.appendChild(name);

        const nameBody = makeContentBody(
            30 + nameW / 2,
            -20, 
            nameW,
            nameH
        );
        Body.setAngle(nameBody, (Math.random() * 12 - 6) * Math.PI / 180);
        registerContent(nameBody, name);

        // 3. 메시지
        const message = document.createElement('div');
        message.className = 'gb-content-item gb-content-message';
        message.textContent = entry.message || '';
        message.style.backgroundColor = entry.msgBg || '#00a8e8';
        message.style.fontSize = `${Math.max(12, 16 * card.scale)}px`;

        const messageW = Math.min(card.w - 24 * card.scale, Math.max(130 * card.scale, Math.min(250 * card.scale, 50 + String(entry.message || '').length * 9 * card.scale)));
        const messageH = Math.max(30, 38 * card.scale);

        message.style.width = `${messageW}px`;
        message.style.height = `${messageH}px`;
        contentLayer.appendChild(message);

        const messageBody = makeContentBody(
            card.w - 30 - messageW / 2,
            -80, 
            messageW,
            messageH
        );
        Body.setAngle(messageBody, (Math.random() * 12 - 6) * Math.PI / 180);
        registerContent(messageBody, message);

        Events.on(engine, 'afterUpdate', () => {
            contentBodies.forEach(body => {
                const meta = body.plugin;
                if (!meta || !meta.element) return;

                const el = meta.element;
                const w = meta.width;
                const h = meta.height;

                el.style.left = `${body.position.x - w / 2}px`;
                el.style.top = `${body.position.y - h / 2}px`;
                el.style.width = `${w}px`;
                el.style.height = `${h}px`;
                el.style.transform = `rotate(${body.angle}rad)`;
            });
        });

        const mouse = Mouse.create(render.canvas);
        mouse.pixelRatio = window.devicePixelRatio || 1;

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.24,
                damping: 0.08,
                render: { visible: false }
            }
        });

        Composite.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        Events.on(mouseConstraint, 'mousemove', () => {
            render.canvas.style.cursor = mouseConstraint.body ? 'grabbing' : 'grab';
        });
        Events.on(mouseConstraint, 'startdrag', () => {
            render.canvas.style.cursor = 'grabbing';
        });
        Events.on(mouseConstraint, 'enddrag', () => {
            render.canvas.style.cursor = 'grab';
        });

        Events.on(engine, 'afterUpdate', () => {
            contentBodies.forEach(body => {
                const meta = body.plugin;
                if (!meta) return;

                const halfW = meta.width / 2;
                const halfH = meta.height / 2;
                const margin = 4; 

                const minX = halfW + margin;
                const maxX = card.w - halfW - margin;
                const minY = halfH + margin;
                const maxY = card.h - halfH - margin;

                let x = body.position.x;
                let y = body.position.y;
                let changed = false;

                if (x < minX) { x = minX; changed = true; }
                if (x > maxX) { x = maxX; changed = true; }
                if (y < minY) { y = minY; changed = true; }
                if (y > maxY) { y = maxY; changed = true; }

                if (changed) {
                    Body.setPosition(body, { x, y });
                    Body.setVelocity(body, {
                        x: body.velocity.x * 0.15,
                        y: body.velocity.y * 0.15
                    });
                    if (Math.abs(body.velocity.x) < 0.05 && Math.abs(body.velocity.y) < 0.05) {
                        Body.setVelocity(body, { x: 0, y: 0 });
                    }
                }
            });
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        card.engine = engine;
        card.render = render;
        card.runner = runner;
        card.contentBodies = contentBodies;
        card.mouseConstraint = mouseConstraint;

        cardStates.push(card);
    };

    entries.forEach(createCard);

    window.addEventListener('resize', () => {
        layout = getLayout();
        const currentTop = getTopMargin(); 

        cardStates.forEach((card, idx) => {
            const slot = idx + 1;
            const row = Math.floor(slot / layout.columns);
            const col = slot % layout.columns;

            card.x = layout.left + col * (layout.width + GAP);
            card.y = currentTop + row * (layout.height + GAP); 
            card.w = layout.width;
            card.h = layout.height;
            card.scale = layout.scale;

            card.frame.style.left = `${card.x}px`;
            card.frame.style.top = `${card.y}px`;
            card.frame.style.width = `${card.w}px`;
            card.frame.style.height = `${card.h}px`;

            card.render.canvas.width = card.w;
            card.render.canvas.height = card.h;
            card.render.options.width = card.w;
            card.render.options.height = card.h;

            card.contentBodies.forEach(body => {
                const meta = body.plugin;
                if (!meta) return;

                const halfW = meta.width / 2;
                const halfH = meta.height / 2;

                Body.setPosition(body, {
                    x: Math.max(halfW + 2, Math.min(card.w - halfW - 2, body.position.x)),
                    y: Math.max(halfH + 2, Math.min(card.h - halfH - 2, body.position.y))
                });
            });
        });
    });
}

/* ===========================================================
   최종 실행부 (Init)
=========================================================== */
renderWorksGrid(worksDataset);
initArchivePagination();
updateArchiveView();
initGuestbookControls();

initPhysics();
navigateToPage('main'); // 초기 렌더링 시점에 메인페이지 메뉴 색상 설정을 위한 실행코드 추가